import Fastify from "fastify";
import dotenv from "dotenv";
import { connectDB } from "./config/DataBase.js";

dotenv.config();
const fastify = Fastify({
  logger: {
    level: "info",
  },
});

// Rutas de autenticación con prefijo /api/auth
await fastify.register(import("./routes/users.js"), {
  prefix: "/api/user",
});

// Función para iniciar el servidor
const start = async () => {
  try {
    await connectDB(); // Conectar a la base de datos
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
