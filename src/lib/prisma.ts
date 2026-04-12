import { PrismaClient } from "@/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

const PrismaClientSingleton = () => {
    return new PrismaClient({ adapter });
};
declare const globalThis: {
    prismaGlobal: ReturnType<typeof PrismaClientSingleton>;
} & typeof global;
const prisma = globalThis.prismaGlobal ?? PrismaClientSingleton();

export { prisma };
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;