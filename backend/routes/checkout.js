import { checkoutSummary } from "../controllers/checkoutController.js";

export default async function CheckoutRouter(fastify) {
  //Get Product from Ingredients
  fastify.post("/summary", {
    schema: {
      summary: "Resumen del checkout desde el carrito",
      body: {
        type: "object",
        required: ["userID"],
        properties: {
          userId: { type: "string" },
        },
      },
    },
    handler: checkoutSummary,
  });
}
