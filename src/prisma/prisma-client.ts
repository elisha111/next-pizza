// import { PrismaClient } from "@prisma/client";

import { PrismaClient } from "@prisma/client/extension";

// const prismaClientSingleton = () => {
//   return new PrismaClient();
// };

// declare global {
//   var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
// }

// export const prisma = globalThis.prisma || prismaClientSingleton();

// if (process.env.NODE_ENV !== "production") {
//   globalThis.prisma = prisma;
// }

// lib/prisma.ts

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
