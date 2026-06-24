import bcrypt from 'bcrypt'
import { FastifyRequest, FastifyReply } from "fastify";
import { createCoach, getCoachByEmail, getCoachById, getCoaches, updateCoach } from "./coach.model";
import { hashPassword } from '../../shared/utils/hashPassword';

type GetByIdBody = { Body: { id: number } };
type UpdateBody = { Body: { id: number; name: string; email: string } };
type CreateBody = { Body: { name: string; email: string; password: string } };

export class CoachController {
  public static async getAll(_request: FastifyRequest, reply: FastifyReply): Promise<void> {
    reply.send(await getCoaches());
  }

  public static async getById(
    request: FastifyRequest<GetByIdBody>,
    reply: FastifyReply,
  ): Promise<void> {
    const { id } = request.body;
    const coach = await getCoachById(id);

    if (!coach) {
      return reply.code(404).send({ message: "Coach not found" });
    }

    reply.send(coach);
  }

  public static async update(
    request: FastifyRequest<UpdateBody>,
    reply: FastifyReply,
  ): Promise<void> {
    const { id, email, name } = request.body;
    const user = await getCoachById(id);

    if (!user) {
      return reply.code(404).send({ message: "Coach not found" });
    }

    const updatedCoach = await updateCoach(id, email, name);
    reply.send(updatedCoach);
  }

  public static async create(
    request: FastifyRequest<CreateBody>,
    reply: FastifyReply,
  ): Promise<void> {
    const { name, email, password } = request.body;

     // 1. Hash the password (salt rounds = 10)
    const hashedPassword = await hashPassword(password)
    await createCoach(name, email, hashedPassword);

    reply.code(201).send({ message: "Coach created!" });
  }
}
