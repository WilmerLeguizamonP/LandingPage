import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

// ── Regex validation ──────────────────────────────────────────────────────────
const leadSchema = z.object({
  nombre:   z.string()
              .min(3, 'Nombre muy corto')
              .max(100)
              .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/, 'Nombre contiene caracteres inválidos'),

  correo:   z.string()
              .email('Correo inválido')
              .max(254)
              .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Formato de correo inválido'),

  telefono: z.string()
              .regex(/^(\+57)?[\s-]?(3\d{2}|[1-8]\d{1})[\s-]?\d{3}[\s-]?\d{4}$/, 'Teléfono colombiano inválido'),

  empresa:  z.string().max(150).optional(),
  tipo:     z.enum(['Empresa', 'Persona independiente']),
  mensaje:  z.string().max(1000).optional(),
  origen:   z.enum(['Modal Automático', 'Formulario Contacto']),
  proyecto: z.string().max(100).optional(),
  
  // Consentimiento obligatorio (Ley 1581)
  consentimiento: z.literal(true, { error: 'Debe aceptar el tratamiento de datos' }),
});

// ── Rate limiting en memoria (reemplazar con Upstash en producción) ───────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string, limit = 5, windowMs = 60_000): boolean {
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

// ── Handler ───────────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  // 1. Rate limiting
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: 'Demasiadas solicitudes. Intente en un minuto.' },
      { status: 429 }
    );
  }

  // 2. Validación
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'JSON inválido' }, { status: 400 });
  }

  const result = leadSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: 'Datos inválidos', details: result.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const { consentimiento: _c, ...data } = result.data;

  // 3. Guardar
  try {
    const lead = await prisma.lead.create({
      data: {
        nombre:   data.nombre.trim(),
        correo:   data.correo.toLowerCase().trim(),
        telefono: data.telefono.replace(/[\s-]/g, ''),
        empresa:  data.empresa?.trim(),
        tipo:     data.tipo,
        mensaje:  data.mensaje?.trim(),
        origen:   data.origen,
        proyecto: data.proyecto,
        estado:   'Nuevo',
      },
    });

    return NextResponse.json({ success: true, id: lead.id }, { status: 201 });
  } catch (error) {
    console.error('Error creando lead:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
