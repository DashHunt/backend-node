import z from "zod";
import { FastifyTypedInstance } from "../../shared/types/fastifyTypedInstance";
import { ExercisesController } from "./exercise.controller";
import { authenticate } from "../../shared/utils/authHook";

import { createdAthleteResponseSchema, createExercisesSchema } from "./exercise.schema";

export default async function athleteRoutes(server: FastifyTypedInstance) {
  // Create coach
  server.post(
    "/exercises",
    {
      preHandler: authenticate,
      schema: {
        description: "Create a new athlete",
        tags: ["Exercises"],
        body: createExercisesSchema,
        response: {
          201: createdAthleteResponseSchema.describe("Athlete created successfully"),
        },
      },
    },
    ExercisesController.create,
  );
}
