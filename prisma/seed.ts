import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Créer un utilisateur de démonstration
  const hashedPassword = await bcrypt.hash('password', 12)
  
  const user = await prisma.user.upsert({
    where: { email: 'demo@example.com' },
    update: {},
    create: {
      email: 'demo@example.com',
      password: hashedPassword,
      name: 'Utilisateur Demo',
    },
  })

  // Créer des contacts de démonstration
  await prisma.contact.createMany({
    data: [
      {
        firstName: 'Jean',
        lastName: 'Dupont',
        phone: '01 23 45 67 89',
        email: 'jean.dupont@email.com',
        address: '123 Rue de la Paix, Paris',
        notes: 'Collègue de travail',
        userId: user.id,
      },
      {
        firstName: 'Marie',
        lastName: 'Martin',
        phone: '06 12 34 56 78',
        email: 'marie.martin@email.com',
        address: '456 Avenue des Champs, Lyon',
        notes: 'Amie d\'enfance',
        userId: user.id,
      },
      {
        firstName: 'Pierre',
        lastName: 'Durand',
        phone: '04 56 78 90 12',
        email: 'pierre.durand@email.com',
        address: '789 Boulevard Saint-Germain, Marseille',
        notes: 'Client important',
        userId: user.id,
      },
    ],
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })