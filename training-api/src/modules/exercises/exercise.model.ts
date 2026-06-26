import { prisma } from "../../../prisma/lib/prisma";

export const getAthletes = async () => {
  return await prisma.athlete.findMany();
};

export const getAthletesByID = async (id: number) => {
  return await prisma.athlete.findUnique({
    where: { id },
  });
};

export const updateAthlete = async (
  id: number,
  name: string,
  email: string,
  weight: string,
  height: string,
) => {
  return await prisma.athlete.update({
    where: { id },
    data: { email, name, weight, height },
  });
};

export const createExercises = async (
  name: string,
  description: string,
  equipment: string,
  muscleGroup: string,
  coachId: number,
) => {
  return await prisma.exercise.create({
    data: {
      description: description,
      name: name,
      equipment: equipment,
      muscleGroup: muscleGroup,
      created_by_coach_id: coachId,
      modificated_by: coachId,
    },
  });
};
