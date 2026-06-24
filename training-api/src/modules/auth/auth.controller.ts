import { FastifyReply, FastifyRequest } from "fastify";
import { comparePassword } from "../../shared/utils/hashPassword";
import { getCoachByEmail } from "../coach/coach.model";

type LoginBody = { email: string; password: string };

export class AuthController {
  public static async login(
    request: FastifyRequest<{ Body: LoginBody }>,
    reply: FastifyReply,
  ): Promise<void> {

    const { email, password } = request.body;
    const coach = await getCoachByEmail(email);

    if (!coach) {
      return reply.code(401).send({ message: "Invalid credentials" });
    }

    const isPasswordValid = await comparePassword(password, coach.password);
    if (!isPasswordValid) {
      return reply.code(401).send({ message: "Invalid credentials" });
    }

    const token = await reply.jwtSign({ id: coach.id, email: coach.email }, { expiresIn: "7d" });
    reply.send({ token });
  }
}
