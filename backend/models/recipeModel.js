import mongoose from "mongoose";
const { Schema, model } = mongoose;

const recipeSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: String,
    category: {
      type: String,
      enum: ["desayuno", "almuerzo", "cena", "postre", "otro"],
      default: "otro",
    },

    ingredients: [
      {
        // implementar la referencia de inggredientes
        /* ingredient: {
          type: Schema.Types.ObjectId,
          ref: "Ingredient",
          required: true,
        }, */
        ingredient: { type: String, required: true },
      },
    ],

    step: [
      {
        orden: { type: Number, required: true },
        descripcion: { type: String, required: true },
      },
    ],

    autor: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    published: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

/**
 * Represents a Recipe Model
 * @typedef {Object} RecipeModel
 * @property {String} title - The title of the recipe.
 * @property {String} description - A brief description of the recipe.
 * @property {String} category - The category of the recipe (e.g., breakfast
 * @property {Array} ingredients - An array of ingredients used in the recipe.
 * @property {Array} step - An array of steps to prepare the recipe.
 * @property {ObjectId} autor - The ID of the user who created the recipe
 * @property {Boolean} published - Indicates if the recipe is published or not.
 * @property {Date} createdAt - The date when the recipe was created.
 * @property {Date} updatedAt - The date when the recipe was last updated.
 */
export default model("Recipe", recipeSchema);

export const RecipeSchema = {
  $id: "Recipe",
  type: "object",
  properties: {
    _id: { type: "string" },
    title: { type: "string" },
    description: { type: "string" },
    category: {
      type: "string",
      enum: ["desayuno", "almuerzo", "cena", "postre", "otro"],
    },
    ingredients: {
      type: "array",
      items: { type: "object", properties: { ingredient: { type: "string" } } },
    },
    step: {
      type: "array",
      items: {
        type: "object",
        properties: {
          orden: { type: "number" },
          descripcion: { type: "string" },
        },
      },
    },
    autor: { type: "string" },
    published: { type: "boolean" },
    createdAt: { type: "string", format: "date-time" },
    updatedAt: { type: "string", format: "date-time" },
  },
};
