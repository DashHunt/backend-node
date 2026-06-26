import { z } from "zod";

//Validation schemas
export const athleteById = z.object({
  id: z.number(),
});

export const createExercisesSchema = z.object({
  coachId: z.number(),
  equipment: z.string(),
  muscleGroup: z.string(),
  description: z.string(),
  name: z.string(),
});

export const updateAthleteSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  height: z.string(),
  weight: z.string(),
});

// Responses
export const athleteResponseSchema = z.object({
  id: z.number(),
  coachId: z.number(),
  name: z.string(),
  email: z.string(),
  height: z.string(),
  weight: z.string(),
  created_at: z.date(),
  deleted_at: z.date().nullable(),
  modificated_at: z.date().nullable(),
});

export const notFoundAthleteSchema = z.object({
  message: z.string(),
});

export const createdAthleteResponseSchema = z.object({ message: z.string() });
