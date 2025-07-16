// app.js
import Fastify from "fastify";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Crear instancia de Fastify
const fastify = Fastify({
  logger: {
    level: "info",
  },
});

// Registrar plugins de rutas
async function registerRoutes() {
  // Rutas de autenticación con prefijo /api/auth
  await fastify.register(import("./routes/auth.js"), {
    prefix: "/api/auth",
  });
}

// Ruta de salud del servidor
fastify.get("/health", async (request, reply) => {
  return {
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: "1.0.0",
  };
});

// Registrar todas las rutas
registerRoutes();

// Función para iniciar el servidor
const start = async () => {
  try {
    await fastify.listen({
      port: 3000,
      host: "0.0.0.0",
    });
    console.log("🚀 Servidor corriendo en http://localhost:3000");
    console.log("📍 Rutas disponibles:");
    console.log("   - GET  /health");
    console.log("   - /api/usuarios/* ");
    console.log("   - /api/productos/*");
    console.log("   - /api/auth/*");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
