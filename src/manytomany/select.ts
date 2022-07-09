import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  const result = await prisma.modules.findMany({
    where: {
      id: '90c991e6-2c30-47ef-bc57-52e6fd7edac6',
    },
    include: {
      courses: true,
    },
  })
  console.log(JSON.stringify(result))
}
main()
