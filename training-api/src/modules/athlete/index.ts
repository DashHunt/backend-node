import fp from "fastify-plugin";
import type { FastifyInstance, FastifyPluginOptions } from "fastify";

async function athleteModules(fastify: FastifyInstance) {
  // fastify.register(coachRoutes);
}

export default fp(athleteModules, { name: "coach-module" });
