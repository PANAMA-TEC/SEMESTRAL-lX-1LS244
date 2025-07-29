import {
  getProductById,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

export default async function ProductRoutes(fastify) {
  //GET all recipes
  fastify.get("/", getProducts);
  //GET a specific recipe by ID
  fastify.get("/:id", getProductById);

  //POST a new recipe
  fastify.post("/", {
    schema: {
      tags: ["Product"],
      summary: "Crear un nuevo producto ",
      body: {
        type: "object",
        required: ["name", "price", "stock", "presentation"],
        properties: {
          _id: {
            type: "string",
          },
          name: {
            type: "string",
          },
          description: {
            type: "string",
          },
          price: {
            type: "number",
          },
          stock: {
            type: "integer",
          },
          presentation: {
            type: "object",
            required: ["value", "unit"],
            properties: {
              value: {
                type: "number",
              },
              unit: {
                type: "string",
                enum: ["ml", "L", "g", "kg", "unidad", "pack"],
              },
            },
          },
          ingredients: {
            type: "array",
            items: {
              type: "string",
            },
          },
          image: {
            type: "string",
          },
          active: {
            type: "boolean",
          },
          createdAt: {
            type: "string",
            format: "date-time",
          },
          updatedAt: {
            type: "string",
            format: "date-time",
          },
        },
      },
      response: {
        200: {
          description: "Respuesta cuando se crear un producto nuevo",
          type: "object",
          properties: {
            message: { type: "string" },
            data: { $ref: "Product#" },
          },
        },
      },
    },

    handler: createProduct,
  });

  //PUT to update a recipe by ID
  fastify.put("/:id", updateProduct);

  //DELETE a recipe by ID
  fastify.delete("/:id", deleteProduct);
}
