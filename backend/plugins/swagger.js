// src/plugins/swagger.js
import fp from "fastify-plugin";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
//import { recipeSchema } from "../model/recipeModel.js";
import { UserSchema } from "../model/userModel.js";

export default fp(async (fastify, opts) => {
  fastify.addSchema(UserSchema);
  //fastify.addSchema(recipeSchema);

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
