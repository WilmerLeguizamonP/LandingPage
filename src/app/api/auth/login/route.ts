import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { compareSync } from 'bcryptjs';
import { SignJWT } from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET ?? (() => { throw new Error('JWT_SECRET no definido en .env'); })()
);

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
function rateLimit(ip: string, limit = 10, windowMs = 15 * 60_000): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (entry.count >= limit) return false;
  entry.count++;
  return true;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: 'Demasiados intentos. Espere 15 minutos.' }, { status: 429 });
  }

  let email: string, password: string;
  try {
    ({ email, password } = await request.json());
  } catch {
    return NextResponse.json({ error: 'JSON inválido' }, { status: 400 });
  }

  if (!email || !password) {
    return NextResponse.json({ error: 'Credenciales requeridas' }, { status: 400 });
  }

  // Tiempo constante para evitar timing attacks
  const user = await prisma.user.findUnique({ where: { email: email.toLowerCase().trim() } });
  const valid = user ? compareSync(password, user.password) : false;

  if (!user || !valid) {
    return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });
  }

  const token = await new SignJWT({ sub: user.id, role: user.role })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('8h')
    .sign(JWT_SECRET);

  const response = NextResponse.json({ success: true });
  response.cookies.set('admin_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 8 * 60 * 60, // 8 horas
    path: '/',
  });

  return response;
}
