import Fastify from "fastify";
import crors from "@fastify/cors";
import dotenv from "dotenv";
import { connectDB } from "./config/DataBase.js";

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

//implementacion de datos de prueba
await fastify.register(import("./plugins/swagger.js"));

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
