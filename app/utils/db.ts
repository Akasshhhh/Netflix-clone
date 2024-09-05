import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

//This code makes sure that only one instance of the prismaClient is being used by your next app
//prismaClient: this is how you can interact with the database
//globalThis is a special object that represents the global scope in JavaScript (similar to global in Node.js or window in the browser).