import fp from "fastify-plugin";
import type { FastifyInstance } from "fastify";
import athleteRoutes from "./exercise.routes";

async function AthleteModules(fastify: FastifyInstance) {
  fastify.register(athleteRoutes);
}

export default fp(AthleteModules, { name: "athlete-module" });
