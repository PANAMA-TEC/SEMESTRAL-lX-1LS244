// app.js
import Fastify from "fastify";

// Crear instancia de Fastify
const fastify = Fastify({
  logger: {
    level: "info",
  },
});

// Rutas de autenticación con prefijo /api/auth
await fastify.register(import("./routes/auth.js"), {
  prefix: "/api/auth",
});

// Función para iniciar el servidor
const start = async () => {
  try {
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
