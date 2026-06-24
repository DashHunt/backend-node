import z from "zod";
import { FastifyTypedInstance } from "../../shared/types/fastifyTypedInstance";
import { CoachController } from "./coach.controller";
import { authenticate } from "../../shared/utils/authHook";

import {
  coachByIdSchema,
  coachResponseSchema,
  createCoachSchema,
  createdCoachResponseSchema,
  notFoundResponseCoachSchema,
  updateCoachSchema,
} from "./coach.schema";

export default async function coachRoutes(server: FastifyTypedInstance) {
  // Get all coaches
  server.get(
    "/coaches",
    {
      preHandler: authenticate,
      schema: {
        tags: ["Coach"],
        description: "List Coach",
        response: {
          200: z.array(coachResponseSchema),
        },
      },
    },
    CoachController.getAll,
  );

  // Get user by-id
  server.post(
    "/coaches-by-id",
    {
       preHandler: authenticate,
      schema: {
        tags: ["Coach"],
        description: "Get Coach by ID",
        body: coachByIdSchema,
        response: {
          200: coachResponseSchema.describe("Coach by ID from database"),
          404: notFoundResponseCoachSchema,
        },
      },
    },
    CoachController.getById,
  );

  // Update partially coach
  server.patch(
    "/update-coach",
    {
      preHandler: authenticate,
      schema: {
        tags: ["Coach"],
        description: "Update Coach by ID",
        body: updateCoachSchema,
        response: {
          200: coachResponseSchema.describe("Coach updated sucessfully"),
          404: notFoundResponseCoachSchema,
        },
      },
    },
    CoachController.update,
  );

  // Create coach
  server.post(
    "/coaches",
    {
      schema: {
        description: "Create a new coach",
        tags: ["Coach"],
        body: createCoachSchema,
        response: {
          201: createdCoachResponseSchema.describe("Coach created successfully"),
        },
      },
    },
    CoachController.create,
  );
}
