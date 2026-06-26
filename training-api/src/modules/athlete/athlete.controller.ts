import { FastifyRequest, FastifyReply } from "fastify";
import { createAthlete, getAthletes, getAthletesByID, updateAthlete } from "./athlete.model";

type GetByIdBody = { Body: { id: number } };
type UpdateBody = { Body: { id: number; name: string; email: string; height: string; weight: string; } };
type CreateBody = { Body: { name: string; email: string; height: string; weight: string; coachId: number } };

export class AthleteController {
  public static async getAll(_request: FastifyRequest, reply: FastifyReply): Promise<void> {
    reply.send(await getAthletes());
  }

  public static async getById(
    request: FastifyRequest<GetByIdBody>,
    reply: FastifyReply,
  ): Promise<void> {
    const { id } = request.body;
    const coach = await getAthletesByID(id);

    if (!coach) {
      return reply.code(404).send({ message: "Coach not found" });
    }

    reply.send(coach);
  }

  public static async update(
    request: FastifyRequest<UpdateBody>,
    reply: FastifyReply,
  ): Promise<void> {
    const { id, email, name, weight, height } = request.body;
    const athlete = await getAthletesByID(id);

    if (!athlete) {
      return reply.code(404).send({ message: "Coach not found" });
    }

    const updatedAthlete = await updateAthlete(id, email, name, weight, height);
    reply.send(updatedAthlete);
  }

  public static async create(
    request: FastifyRequest<CreateBody>,
    reply: FastifyReply,
  ): Promise<void> {
    const { name, email, weight, height, coachId } = request.body;

    await createAthlete(name, email, weight, height, coachId);
    reply.code(201).send({ message: "Coach created!" });
  }
}
