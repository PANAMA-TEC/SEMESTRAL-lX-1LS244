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
        ingredient: { type: String, required: true },
        /* ingredient: {
          type: Schema.Types.ObjectId,
          ref: "Ingredient",
          required: true,
        }, */
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

export default model("Recipe", recipeSchema);
