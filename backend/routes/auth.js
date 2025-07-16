// src/routes/auth.js
async function authRoutes(fastify, options) {
  // Simulación de usuarios registrados
  const usuariosRegistrados = [
    { id: 1, username: "admin", password: "admin", role: "admin" },
    { id: 2, username: "usuario", password: "user", role: "user" },
  ];

  // POST /api/auth/login - Iniciar sesión
  fastify.post("/login", async (request, reply) => {
    const { username, password } = request.body;

    if (!username || !password) {
      reply.code(400);
      return {
        error: "Username y password son requeridos",
        status: "error",
      };
    }

    const usuario = usuariosRegistrados.find(
      (u) => u.username === username && u.password === password
    );

    if (!usuario) {
      reply.code(401);
      return {
        error: "Credenciales inválidas",
        status: "error",
      };
    }

    // En un caso real, aquí generarías un JWT
    const token = Buffer.from(
      `${usuario.id}:${usuario.username}:${Date.now()}`
    ).toString("base64");

    return {
      mensaje: "Login exitoso",
      token,
      usuario: {
        id: usuario.id,
        username: usuario.username,
        role: usuario.role,
      },
      status: "success",
    };
  });

  // POST /api/auth/register - Registrar usuario
  fastify.post("/register", async (request, reply) => {
    const { username, password, confirmPassword } = request.body;

    // Validaciones
    if (!username || !password || !confirmPassword) {
      reply.code(400);
      return {
        error: "Todos los campos son requeridos",
        status: "error",
      };
    }

    if (password !== confirmPassword) {
      reply.code(400);
      return {
        error: "Las contraseñas no coinciden",
        status: "error",
      };
    }

    if (password.length < 6) {
      reply.code(400);
      return {
        error: "La contraseña debe tener al menos 6 caracteres",
        status: "error",
      };
    }

    // Verificar si el usuario ya existe
    const usuarioExiste = usuariosRegistrados.find(
      (u) => u.username === username
    );
    if (usuarioExiste) {
      reply.code(409);
      return {
        error: "El username ya está registrado",
        status: "error",
      };
    }

    // Registrar nuevo usuario
    const nuevoUsuario = {
      id: usuariosRegistrados.length + 1,
      username,
      password, // En un caso real, deberías hashear la contraseña
      role: "user",
      fechaRegistro: new Date().toISOString(),
    };

    usuariosRegistrados.push(nuevoUsuario);

    reply.code(201);
    return {
      mensaje: "Usuario registrado exitosamente",
      usuario: {
        id: nuevoUsuario.id,
        username: nuevoUsuario.username,
        role: nuevoUsuario.role,
      },
      status: "success",
    };
  });

  // GET /api/auth/me - Obtener información del usuario actual (requiere token)
  fastify.get("/me", async (request, reply) => {
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      reply.code(401);
      return {
        error: "Token de autorización requerido",
        status: "error",
      };
    }

    const token = authHeader.substring(7); // Remover "Bearer "

    try {
      // Decodificar token simple (en un caso real usarías JWT)
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
      reply.code(401);
      return {
        error: "Token inválido",
        status: "error",
      };
    }
  });
}

export default authRoutes;
