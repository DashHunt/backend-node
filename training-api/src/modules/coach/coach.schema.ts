import { z } from "zod";

const PasswordSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters long" })
  .max(32, { message: "Password cannot exceed 32 characters" })
  .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
  .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
  .regex(/[0-9]/, { message: "Password must contain at least one number" })
  .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character" });

//Validation schemas
export const coachByIdSchema = z.object({
  id: z.number(),
});

export const createCoachSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: PasswordSchema,
});

export const updateCoachSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
});

// Responses
export const coachResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  created_at: z.date(),
  deleted_at: z.date().nullable(),
  modificated_at: z.date().nullable(),
});

export const notFoundResponseCoachSchema = z.object({
  message: z.string(),
});

export const createdCoachResponseSchema = z.object({ message: z.string() });
