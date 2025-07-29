import mongoose from "mongoose";
const { Schema, model } = mongoose;

const cartItemSchema = new Schema(
  {
    userID: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    items: [
      {
        recipe: {
          type: Schema.Types.ObjectId,
          ref: "Recipe",
          required: true,
        },
        addedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("CartItem", cartItemSchema);

export const CartItemSchema = {
  $id: "CartItem",
  type: "object",
  required: ["userID", "items"],
  properties: {
    userID: {
      type: "string",
      format: "uuid",
      description: "ID del usuario dueño del carrito",
      example: "64f2ab12d123f00123abcd99",
    },
    items: {
      type: "array",
      description: "Lista de recetas en el carrito",
      items: {
        type: "object",
        required: ["recipeID"],
        properties: {
          recipeID: {
            type: "string",
            format: "uuid",
            description: "ID de la receta agregada",
            example: "64f3cd12d123f00234abcd55",
          },
          addedAt: {
            type: "string",
            format: "date-time",
            description: "Fecha y hora en que se agregó la receta",
            example: "2024-07-27T14:32:00Z",
          },
        },
      },
    },
    createdAt: {
      type: "string",
      format: "date-time",
      description: "Fecha de creación del documento",
      example: "2024-07-27T14:32:00Z",
    },
    updatedAt: {
      type: "string",
      format: "date-time",
      description: "Fecha de la última modificación",
      example: "2024-07-27T15:10:45Z",
    },
  },
};
