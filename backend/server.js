import Fastify from "fastify";
import dotenv from "dotenv";
import { connectDB } from "./config/DataBase.js";

dotenv.config();
const fastify = Fastify({
  logger: {
    level: "info",
  },
});
await fastify.register(import("./plugins/swagger.js"));

await fastify.register(import("./routes/user.js"), {
  prefix: "/api/user",
});

await fastify.register(import("./routes/recipe.js"), {
  prefix: "/api/recipe",
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
