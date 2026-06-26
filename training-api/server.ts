import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import {
  validatorCompiler,
  serializerCompiler,
  jsonSchemaTransform,
} from "fastify-type-provider-zod";

import CoachModules from "./src/modules/coach/index";
import LoginModules from "./src/modules/auth/index";
import AthleteModules from "./src/modules/athlete/index";
import fastifyJwt from "@fastify/jwt";

const server = fastify();

server.setValidatorCompiler(validatorCompiler);
server.setSerializerCompiler(serializerCompiler);

server.register(fastifyCors, { origin: "*" });

server.register(fastifySwagger, {
  openapi: {
    info: {
      title: "Training API",
      version: "1.0.0",
    },
  },
  transform: jsonSchemaTransform,
});

server.register(fastifySwaggerUi, {
  routePrefix: "/api-docs",
});

server.register(fastifyJwt, {
  secret: process.env.JWT_SECRET as string,
});

server.register(CoachModules);
server.register(AthleteModules);
server.register(LoginModules);

server.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("SERVER RUNNING ON PORT 3333");
});
