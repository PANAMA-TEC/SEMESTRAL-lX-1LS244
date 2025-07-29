import {
  addToCart,
  getCart,
  removeFromCart,
} from "../controllers/cartItemController.js";

export default async function CartItemRouter(fastify) {
  //GET cartItem by userID
  fastify.get("/:userID", getCart);

  //POST to add a recipe to the cart
  fastify.post("/add", {
    schema: {
      tags: ["Cart"],
      summary: "Agregar una receta al carrito del usuario",
      body: {
        type: "object",
        required: ["userID", "recipe"],
        properties: {
          userID: {
            type: "string",
            description: "ID del usuario",
          },
          items: {
            type: "array",
            items: {
              type: "object",
              properties: {
                recipeID: { type: "string" },
              },
            },
          },
        },
      },
      response: {
        200: {
          description: "Respuesta cuando se agrega la receta al carrito",
          type: "object",
          properties: {
            message: { type: "string" },
            cart: { $ref: "CartItem#" },
          },
        },
      },
    },
    handler: addToCart,
  });

  //DELETE to remove a recipe from the cart
  fastify.delete("/remove", removeFromCart);
}
