// src/plugins/swagger.js
import fp from "fastify-plugin";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
import { RecipeSchema } from "../models/recipeModel.js";
import { UserSchema } from "../models/userModel.js";

export default fp(async (fastify, opts) => {
  fastify.addSchema(UserSchema);
  fastify.addSchema(RecipeSchema);

  await fastify.register(swagger, {
    swagger: {
      info: { title: "API E-commerce", version: "1.0.0" },
      consumes: ["application/json"],
      produces: ["application/json"],
    },
  });

  await fastify.register(swaggerUI, {
    routePrefix: "/docs",
    uiConfig: { docExpansion: "list" },
  });
});
