import path, { dirname } from 'path';
import { fileURLToPath } from "url";
import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import {
  validatorCompiler,
  serializerCompiler,
  jsonSchemaTransform,
} from "fastify-type-provider-zod";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import fastifyAutoload from "@fastify/autoload";

const server = fastify();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
  routePrefix: "/docs",
});

server.register(fastifyAutoload, {
  dir: path.join(__dirname, "src/routes"),
});

server.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("SERVER RUNNING ON PORT 3333");
});
