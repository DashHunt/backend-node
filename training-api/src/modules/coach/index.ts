import fp from "fastify-plugin";
import type { FastifyInstance, FastifyPluginOptions } from "fastify";
import coachRoutes from "./coach.routes";

async function coachModules(fastify: FastifyInstance) {
  fastify.register(coachRoutes);
}

export default fp(coachModules, { name: "coach-module" });
