// Needed for building/deploying:
import Prisma from '@prisma/client';
const { PrismaClient } = Prisma;

// Needed for running local dev:
// import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;