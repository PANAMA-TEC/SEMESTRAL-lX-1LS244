import {
  getIngredients,
  getIngredientsById,
  createIngredient,
  updateIngredient,
  deleteIngredient,
  updateIngredientAvailability,
} from "../controllers/ingredientController.js";
export default async function ingredientRoutes(fastify) {
  // GET all ingredients
  fastify.get("/", getIngredients);

  // GET a specific ingredient by ID
  fastify.get("/:id", getIngredientsById);

  // POST a new ingredient
  fastify.post("/", createIngredient);

  // PUT to update an ingredient by ID
  fastify.put("/:id", updateIngredient);

  // PATCH to update an ingredient
  fastify.patch("/:id", updateIngredientAvailability);

  // DELETE an ingredient by ID
  fastify.delete("/:id", deleteIngredient);
}
