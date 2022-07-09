import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  const result = await prisma.modules.create({
    data: {
      description: 'Aprendento firebase do zero',
      name: 'Aprendendo FireBase',
      courses: {
        create: {
          course: {
            connect: {
              id: 'da471688-2c34-41b4-a7af-dd59b82a6609',
            },
          },
        },
      },
    },
  })
  console.log(result)
}
main()
