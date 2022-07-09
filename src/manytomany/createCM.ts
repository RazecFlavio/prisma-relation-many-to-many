import { PrismaClient } from '@prisma/client'

async function manin() {
  const prisma = new PrismaClient()
  const result = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          name: 'curso 1',
          duration: 10,
        },
      },
      module: {
        create: {
          name: 'modulo 1 do curso 1',
          description: 'modulo para criar a vinculacao diretamente',
        },
      },
    },
  })
  console.log(result)
}
manin()
