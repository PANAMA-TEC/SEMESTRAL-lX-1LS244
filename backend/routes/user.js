import { login, register } from "../controllers/userController.js";

async function userRoutes(fastify) {
  // POST /api/auth/login - Iniciar sesión
  fastify.post("/login", login);
  // POST /api/auth/register - Registrar nuevo usuario
  fastify.post("/register", register);

  // GET /api/auth/me - Obtener información del usuario actual (requiere token)
  fastify.get("/me", async (request, reply) => {
    const authHeader = request.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      reply.code(401);
      return {
        error: "Token de autorización requerido",
        status: "error",
      };
    }

    const token = authHeader.substring(7); // Remover "Bearer "

    try {
      // Decodificar token simple (en un caso real usarías JWT)
      // eslint-disable-next-line no-undef
      const decoded = Buffer.from(token, "base64").toString();
      const [userId, username] = decoded.split(":");

      const usuario = usuariosRegistrados.find(
        (u) => u.id === parseInt(userId) && u.username === username
      );

      if (!usuario) {
        reply.code(401);
        return {
          error: "Token inválido",
          status: "error",
        };
      }

      return {
        usuario: {
          id: usuario.id,
          username: usuario.username,
          role: usuario.role,
        },
        status: "success",
      };
    } catch (error) {
      console.error("Error al decodificar el token:", error);
      reply.code(401);
      return {
        error: "Token inválido",
        status: "error",
      };
    }
  });
}

export default userRoutes;
