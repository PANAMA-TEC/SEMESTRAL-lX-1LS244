import Fastify from "fastify";
import crors from "@fastify/cors";
import dotenv from "dotenv";
import "./config/dotenv.js";
import { connectDB } from "./config/database.js";

dotenv.config();
const fastify = Fastify({
  logger: {
    level: "info",
  },
});

fastify.register(crors, {
  origin: "*", // Permite solicitudes desde cualquier origen
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
});

//Register Plugins
await fastify.register(import("./plugins/swagger.js"));
await fastify.register(import("./plugins/stripe.js"));

// Resgister Router
await fastify.register(import("./routes/user.js"), {
  prefix: "/api/user",
});

await fastify.register(import("./routes/recipe.js"), {
  prefix: "/api/recipe",
});

await fastify.register(import("./routes/ingredients.js"), {
  prefix: "/api/ingredient",
});

await fastify.register(import("./routes/comment.js"), {
  prefix: "/api/comment",
});
await fastify.register(import("./routes/cartItem.js"), {
  prefix: "/api/cartItem",
});

await fastify.register(import("./routes/product.js"), {
  prefix: "/api/product",
});

await fastify.register(import("./routes/order.js"), {
  prefix: "/api/order",
});

await fastify.register(import("./routes/payment.js"), {
  prefix: "/api/payment",
});

// Función para iniciar el servidor
const start = async () => {
  try {
    await connectDB();
    await fastify.listen({
      port: 3000,
      host: "0.0.0.0",
    });
  } catch (err) {
    fastify.log.error(err);
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
};

start();
