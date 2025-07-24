export const recipeSchema = new Schema(
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
        ingredient: {
          type: Schema.Types.ObjectId,
          ref: "Ingredient", // 👈 relación directa
        },
        name: {
          type: String,
          required: true, // 👈 para mostrarlo si no hay ref o por fallback
        },
        quantity: {
          type: Number,
          required: true,
        },
        unit: {
          type: String,
          required: true,
        },
        notes: {
          type: String,
        },
      },
    ],

    step: [
      {
        orden: { type: Number, required: true },
        descripcion: { type: String, required: true },
      },
    ],

    time: { type: Number, default: 0 },

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
