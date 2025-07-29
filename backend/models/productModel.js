import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    presentation: {
      value: {
        type: Number,
        required: true,
      },
      unit: {
        type: String,
        enum: ["ml", "L", "g", "kg", "unidad", "pack"],
        required: true,
      },
    },

    ingredients: [
      {
        type: Schema.Types.ObjectId,
        ref: "Ingredient",
      },
    ],

    image: String,
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Product", productSchema);

export const ProductSchema = {
  $id: "Product",
  type: "object",
  required: ["name", "price", "stock", "presentation"],
  properties: {
    _id: {
      type: "string",
      example: "64cfc126cf12d123c74c1f44",
    },
    name: {
      type: "string",
      example: "Leche deslactosada",
    },
    description: {
      type: "string",
      example: "Leche deslactosada en presentación de 1L",
    },
    price: {
      type: "number",
      example: 2.99,
    },
    stock: {
      type: "integer",
      example: 100,
    },
    presentation: {
      type: "object",
      required: ["value", "unit"],
      properties: {
        value: {
          type: "number",
          example: 1,
        },
        unit: {
          type: "string",
          enum: ["ml", "L", "g", "kg", "unidad", "pack"],
          example: "L",
        },
      },
    },
    ingredients: {
      type: "array",
      items: {
        type: "string",
        example: "64cfc011aa42f76db5b3e205",
      },
    },
    image: {
      type: "string",
      example: "https://cdn.example.com/products/leche1l.jpg",
    },
    active: {
      type: "boolean",
      example: true,
    },
    createdAt: {
      type: "string",
      format: "date-time",
      example: "2025-07-29T18:12:34.000Z",
    },
    updatedAt: {
      type: "string",
      format: "date-time",
      example: "2025-07-29T18:15:00.000Z",
    },
  },
};
