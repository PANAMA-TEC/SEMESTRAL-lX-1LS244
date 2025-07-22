// src/models/Usuario.js
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: [true, "El nombre es requerido"],
      trim: true,
      minlength: [2, "El nombre debe tener al menos 2 caracteres"],
      maxlength: [50, "El nombre no puede exceder 50 caracteres"],
    },
    email: {
      type: String,
      required: [true, "El email es requerido"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Por favor ingresa un email válido",
      ],
    },
    password: {
      type: String,
      required: [true, "La contraseña es requerida"],
      select: false, // No mostrar la contraseña por defecto
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    active: {
      type: Boolean,
      default: true,
    },
    registerDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Índeel para búsquedas rápidas
userSchema.index({ active: 1 });
userSchema.index({ role: 1 });

// Método virtual para obtener nombre completo
userSchema.virtual("datosCompletos").get(function () {
  return {
    id: this._id,
    fullname: this.fullname,
    email: this.email,
    activo: this.active,
    role: this.role,
    registerDate: this.registerDate,
  };
});

// Método estático para buscar usuarios activos
userSchema.statics.schearEmail = function (email) {
  return this.find(email);
};

// Middleware pre-save para validaciones adicionales
userSchema.pre("save", function (next) {
  if (this.isNew) {
    console.log(`🆕 Creando nuevo usuario: ${this.email}`);
  }
  next();
});

// Middleware post-save para logging
userSchema.post("save", function (doc) {
  console.log(`usuario guardado: ${doc.email}`);
});

/**
 * Represents a User model.
 * @typedef {Object} User
 * @property {string} id - Unique identifier for the user.
 * @property {string} username - The user's username.
 * @property {string} email - The user's email address.
 * @property {string} [password] - The user's hashed password (optional).
 * @property {Date} createdAt - The date the user was created.
 * @property {Date} updatedAt - The date the user was last updated.
 */
export default model("User", userSchema);

export const UserSchema = {
  $id: "User",
  type: "object",
  properties: {
    _id: { type: "string" },
    fullname: { type: "string" },
    email: { type: "string", format: "email" },
    role: { type: "string", enum: ["admin", "user"] },
    active: { type: "boolean" },
    registerDate: { type: "string", format: "date-time" },
  },
  required: ["fullname", "email"],
};
