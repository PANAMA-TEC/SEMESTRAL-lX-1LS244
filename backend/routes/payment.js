import {
  createStripeSession,
  handleStripeSuccess,
} from "../controllers/paymentController.js";

export default async function paymentRoutes(fastify) {
  fastify.post("/checkout/:orderID", createStripeSession);

  fastify.post("/success/:sessionId", handleStripeSuccess);
}
