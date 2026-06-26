import z from "zod";
import { FastifyTypedInstance } from "../../shared/types/fastifyTypedInstance";
import { AthleteController } from "./athlete.controller";
import { authenticate } from "../../shared/utils/authHook";

import {
  athleteById,
  createAthleteSchema,
  notFoundAthleteSchema,
  updateAthleteSchema,
  athleteResponseSchema,
  createdAthleteResponseSchema,
} from "./athlete.schema";

export default async function athleteRoutes(server: FastifyTypedInstance) {
  // Get all coaches
  server.get(
    "/athletes",
    {
      preHandler: authenticate,
      schema: {
        tags: ["Athlete"],
        description: "List Athlete",
        response: {
          200: z.array(athleteResponseSchema),
        },
      },
    },
    AthleteController.getAll,
  );

  // Get user by-id
  server.post(
    "/athletes-by-id",
    {
       preHandler: authenticate,
      schema: {
        tags: ["Athlete"],
        description: "Get Athlete by ID",
        body: athleteById,
        response: {
          200: athleteResponseSchema.describe("Athlete by ID from database"),
          404: notFoundAthleteSchema,
        },
      },
    },
    AthleteController.getById,
  );

  // Update partially coach
  server.patch(
    "/update-athlete",
    {
      preHandler: authenticate,
      schema: {
        tags: ["Athlete"],
        description: "Update Athlete by ID",
        body: updateAthleteSchema,
        response: {
          200: athleteResponseSchema.describe("Athlete updated sucessfully"),
          404: notFoundAthleteSchema,
        },
      },
    },
    AthleteController.update,
  );

  // Create coach
  server.post(
    "/athletes",
    {
      preHandler: authenticate,
      schema: {
        description: "Create a new athlete",
        tags: ["Athlete"],
        body: createAthleteSchema,
        response: {
          201: createdAthleteResponseSchema.describe("Athlete created successfully"),
        },
      },
    },
    AthleteController.create,
  );
}
