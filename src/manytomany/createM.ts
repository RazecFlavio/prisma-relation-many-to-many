import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  const result = await prisma.modules.create({
    data: {
      description: 'Aprendento firebase do zero',
      name: 'Aprendendo FireBase',
    },
  })
}
main()
