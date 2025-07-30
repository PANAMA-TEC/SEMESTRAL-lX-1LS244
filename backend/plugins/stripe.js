import fp from "fastify-plugin";
import { stripe } from "../config/stripe.js";

export default fp(async function (fastify) {
  fastify.decorate("stripe", stripe);
});
