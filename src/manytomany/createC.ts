import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  const result = await prisma.courses.create({
    data: {
      name: 'React JS',
      duration: 180,
    },
  })
  console.log(result)
}
main()
