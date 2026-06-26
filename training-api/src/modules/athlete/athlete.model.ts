import { prisma } from "../../../prisma/lib/prisma";

export const getAthletes = async () => {
  return await prisma.athlete.findMany();
};

export const getAthletesByID = async (id: number) => {
  return await prisma.athlete.findUnique({
    where: { id },
  });
};

export const updateAthlete = async (id: number, name: string, email: string, weight: string, height: string) => {
  return await prisma.athlete.update({
    where: { id },
    data: { email, name, weight, height },
  });
};

export const createAthlete = async (
  name: string,
  email: string,
  weight: string,
  height: string,
  coachId: number,
) => {
  return await prisma.athlete.create({
    data: {
      email,
      name,
      weight,
      height,
      coachId,
    },
  });
};
