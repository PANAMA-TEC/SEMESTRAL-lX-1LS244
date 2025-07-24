import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ingredientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    unit: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    availableAsProduct: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
/**
 * Represents an Ingredient Model
 * @typedef {Object} IngredientModel
 * @property {String} _id - Unique identifier of the ingredient.
 * @property {String} name - Normalized name of the ingredient (lowercase, trimmed, unique).
 * @property {String} unit - Base unit of the ingredient (e.g., "g", "ml", "unidad").
 * @property {Boolean} availableAsProduct - Indicates if this ingredient is linked to any product in the store.
 * @property {Date} createdAt - Date when the ingredient was created.
 * @property {Date} updatedAt - Date when the ingredient was last updated.
 */

export default model("Ingredient", ingredientSchema);

export const IngredientSchema = {
  $id: "Ingredient",
  type: "object",
  properties: {
    _id: {
      type: "string",
      description: "Unique identifier of the ingredient",
      example: "64ff1923b2a84c001f6de2a9",
    },
    name: {
      type: "string",
      description:
        "Normalized name of the ingredient (lowercase, trimmed, unique)",
      example: "aceite de oliva",
    },
    unit: {
      type: "string",
      description: "Base unit of the ingredient (e.g., 'g', 'ml', 'unidad')",
      example: "ml",
    },
    availableAsProduct: {
      type: "boolean",
      description:
        "Indicates if this ingredient is linked to any product in the store",
      example: true,
    },
    createdAt: {
      type: "string",
      format: "date-time",
      description: "Timestamp of when the ingredient was created",
    },
    updatedAt: {
      type: "string",
      format: "date-time",
      description: "Timestamp of the last update",
    },
  },
  required: ["name", "unit"],
};
