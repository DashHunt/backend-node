import z from "zod";
import { FastifyTypedInstance } from "../types/fastifyTypedInstance";
import { prisma } from "../../prisma/lib/prisma";

interface User {
  id: number;
  name: string | null;
  email: string;
}

const users: User[] = [];

export default async function routes(server: FastifyTypedInstance) {
  server.get(
    "/users",
    {
      schema: {
        tags: ["Users"],
        description: "List Users",
        response: {
          200: z
            .array(
              z.object({
                id: z.number(),
                name: z.string().nullable(),
                email: z.string(),
              }),
            )
            .describe("All users from database"),
        },
      },
    },
    async (request, reply) => {
      const allUsers: User[] = await prisma.user.findMany();
      reply.send(allUsers);
    },
  );

  server.post(
    "/users",
    {
      schema: {
        description: "Create a new user",
        tags: ["Users"],
        body: z.object({
          name: z.string(),
          email: z.string().email(),
        }),
        response: {
          201: z
            .object({ message: z.string() })
            .describe("User created successfully"),
        },
      },
    },
    async (request, reply) => {
      const { name } = request.body;

      reply.code(201).send({ message: "User created!" });
    },
  );
}
