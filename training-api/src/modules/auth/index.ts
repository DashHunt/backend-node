import fp from "fastify-plugin";
import type { FastifyInstance, FastifyPluginOptions } from "fastify";
import loginRoutes from "./auth.routes";

async function loginModules(fastify: FastifyInstance) {
  fastify.register(loginRoutes);
}

export default fp(loginModules, { name: "coach-module" });
