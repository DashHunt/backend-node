import { prisma } from "../../../prisma/lib/prisma";

export const getCoaches = async () => {
  return await prisma.coach.findMany();
};

export const getCoachById = async (id: number) => {
  return await prisma.coach.findUnique({
    where: { id },
  });
};

export const getCoachByEmail = async (email: string) => {
  return await prisma.coach.findUnique({
    where: { email },
  });
};

export const updateCoach = async (id: number, name: string, email: string) => {
  return await prisma.coach.update({
    where: { id },
    data: { email: email, name: name },
  });
};

export const createCoach = async (name: string, email: string, password: string) => {
  return await prisma.coach.create({
    data: { email: email, name: name, password: password },
  });
};
