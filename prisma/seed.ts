import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    throw new Error(
      'Define ADMIN_EMAIL y ADMIN_PASSWORD en .env antes de correr el seed'
    );
  }

  const existing = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (existing) {
    console.log('✓ Admin ya existe, nada que hacer.');
    return;
  }

  await prisma.user.create({
    data: {
      email:    adminEmail,
      password: hashSync(adminPassword, 12), // hash con bcrypt, nunca texto plano
      role:     'admin',
    },
  });

  console.log(`✓ Admin creado: ${adminEmail}`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
