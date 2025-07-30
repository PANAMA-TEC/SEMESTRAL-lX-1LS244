import User from "../models/userModel.js";
import bcrypt from "bcrypt";
const SALT_ROUNDS = 12;

export async function login(request, reply) {
  try {
    const { email, password } = request.body;
    if (!email || !password) {
      return reply
        .code(400)
        .send({ status: "error", error: "Username y Password son requeridos" });
    }

    try {
      const user = await User.findOne({ email }).select("+password");
      if (!user) {
        return reply
          .code(401)
          .send({ status: "error", error: "Credenciales inválidas" });
      }

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        return reply.code(401).send({
          status: "error",
          error: "Credenciales inválidas",
        });
      }

      const token = Buffer.from(
        `${user.id}:${user.email}:${Date.now()}`
      ).toString("base64");

      return reply.code(200).send({
        status: "success",
        mensaje: "Login exitoso",
        token,
        usuario: {
          id: user.id,
          email: user.email,
          role: user.role,
        },
      });
    } catch (error) {
      console.error("Error al buscar el usuario:", error);
      return reply
        .code(500)
        .send({ status: "error", error: "Error al buscar el usuario" });
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    return reply
      .code(500)
      .send({ status: "error", error: "Error al iniciar sesión" });
  }
}

export async function register(request, reply) {
  try {
    const { email, password, fullname } = request.body;
    if (!email || !password || !fullname) {
      reply.code(400);
      return reply.code(400).send({
        status: "error",
        error: "Email, password y fullname son requeridos",
      });
    }
    
    const existingUser = await User.exists({ email });


    if (existingUser) {
      console.error("El usuario ya existe:", existingUser);
      return reply.code(400).send({
        status: "error",
        error: "El usuario ya existe",
      });
    }

    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: hashedPassword,
      fullname,
    });

    await newUser.save();
    return reply.code(201).send({
      status: "success",
      mensaje: "Usuario registrado exitosamente",
      usuario: newUser.datosCompletos,
    });
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
    return reply
      .code(500)
      .send({ status: "error", error: "Error al registrar el usuario" });
  }
}

export async function getCurrentUser(request, reply) {
  const authHeader = request.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return reply
      .code(401)
      .send({ status: "error", error: "Token de autorización requerido" });
  }

  const token = authHeader.substring(7);

  try {
    // Decodificar token simple (en un caso real usarías JWT)
    const decoded = Buffer.from(token, "base64").toString();
    const [userId, email] = decoded.split(":");

    const user = await User.findById(userId).select("+password");

    if (!user || user.email !== email) {
      return reply.code(401).send({
        error: "Token inválido",
        status: "error",
      });
    }

    return {
      usuario: user.datosCompletos,
      status: "success",
    };
  } catch (error) {
    console.error("Error al decodificar el token:", error);
    return reply.code(401).send({
      error: "Token inválido",
      status: "error",
    });
  }
}
