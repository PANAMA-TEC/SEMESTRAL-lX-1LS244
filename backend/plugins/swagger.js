import fp from "fastify-plugin";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
import { RecipeSchema } from "../models/recipeModel.js";
import { UserSchema } from "../models/userModel.js";
import { CommentSchema } from "../models/commentModel.js";
import { CartItemSchema } from "../models/cartItemModel.js";
import { ProductSchema } from "../models/productModel.js";

export default fp(async (fastify) => {
  fastify.addSchema(UserSchema);
  fastify.addSchema(RecipeSchema);
  fastify.addSchema(CommentSchema);
  fastify.addSchema(CartItemSchema);
  fastify.addSchema(ProductSchema);

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
