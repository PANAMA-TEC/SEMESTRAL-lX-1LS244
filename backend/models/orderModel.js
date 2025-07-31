import mongoose from "mongoose";
const { Schema, model } = mongoose;

const orderSchema = new Schema(
  {
    userID: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    items: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        ingredient: {
          type: Schema.Types.ObjectId,
          ref: "Ingredient",
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
        },
      },
    ],
    subtotal: {
      type: Number,
    },
    total: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["pendiente", "pagado", "cancelado"],
      default: "pendiente",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Order", orderSchema);

export const OrderSchema = {
  $id: "Order",
  type: "object",
  required: ["userID", "items", "total", "status"],
  properties: {
    userID: {
      type: "string",
      format: "uuid", // o 'objectId' si usas una extensión personalizada
      description: "ID del usuario que realizó la orden",
    },
    items: {
      type: "array",
      items: {
        type: "object",
        required: ["quantity", "price"],
        properties: {
          product: {
            type: "string",
            format: "uuid",
            description: "ID del producto (opcional si es ingrediente)",
          },
          ingredient: {
            type: "string",
            format: "uuid",
            description: "ID del ingrediente (opcional si es producto)",
          },
          quantity: {
            type: "number",
            description: "Cantidad del producto o ingrediente",
          },
          price: {
            type: "number",
            description: "Precio unitario del producto o ingrediente",
          },
        },
      },
    },
    subtotal: {
      type: "number",
      description: "Suma de precios sin incluir gastos adicionales",
    },
    total: {
      type: "number",
      description: "Total final de la orden (incluye impuestos o envío)",
    },
    status: {
      type: "string",
      enum: ["pediente", "pagado", "cancelado"],
      description: "Estado actual de la orden",
    },
    createdAt: {
      type: "string",
      format: "date-time",
      description: "Fecha de creación de la orden",
    },
    updatedAt: {
      type: "string",
      format: "date-time",
      description: "Última fecha de modificación de la orden",
    },
  },
};
