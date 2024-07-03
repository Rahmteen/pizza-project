import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * @name createLog 
 * @description service for handling logs across the platform.
 * 
 * @param {string} type specificity on the log type.
 * @param {string} description description on the log itself.
 */

export const createLog = async (type: string, description: string) => {
  await prisma.log.create({
    data: {
      type,
      description,
      createdAt: new Date(),
    },
  });
};
