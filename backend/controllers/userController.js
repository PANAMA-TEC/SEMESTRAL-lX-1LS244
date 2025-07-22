import User from "../model/userModel.js";

export async function login(request, reply) {
  const { email, password } = request.body;

  if (!email || !password) {
    reply.code(400);
    return {
      error: "Username y password son requeridos",
      status: "error",
    };
  }

  const user = User.find({ email: email });

  if (!email) {
    reply.code(401);
    return {
      error: "Credenciales inválidas",
      status: "error",
    };
  }

  const token = Buffer.from(`${user.id}:${user.email}:${Date.now()}`).toString(
    "base64"
  );

  return {
    mensaje: "Login exitoso",
    token,
    usuario: {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    status: "success",
  };
}

export async function register(request, reply) {
  const { email, password, fullname } = request.body;

  if (!email || !password || !fullname) {
    reply.code(400);
    return {
      error: "Email, password y fullname son requeridos",
      status: "error",
    };
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    reply.code(409);
    return {
      error: "El usuario ya existe",
      status: "error",
    };
  }

  const newUser = new User({
    email,
    password, // Aquí deberías hashear la contraseña antes de guardarla
    fullname,
  });

  await newUser.save();

  return {
    mensaje: "Usuario registrado exitosamente",
    usuario: newUser.datosCompletos,
    status: "success",
  };
}

export async function getCurrentUser(request, reply) {
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
    const decoded = Buffer.from(token, "base64").toString();
    const [userId, email] = decoded.split(":");

    const user = await User.findById(userId).select("+password");

    if (!user || user.email !== email) {
      reply.code(401);
      return {
        error: "Token inválido",
        status: "error",
      };
    }

    return {
      usuario: user.datosCompletos,
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
}
