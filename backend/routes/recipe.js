import {
  getRecipes,
  createRecipe,
  getRecipeId,
  updateRecipe,
  deleteRecipe,
} from "../controllers/recipeController.js";

async function recipeRoutes(fastify) {
  //GET all recipes
  fastify.get("/", getRecipes);
  //GET a specific recipe by ID
  fastify.get("/:id", getRecipeId);

  //POST a new recipe
  fastify.post("/", createRecipe);

  //PUT to update a recipe by ID
  fastify.put("/:id", updateRecipe);

  //DELETE a recipe by ID
  fastify.delete("/:id", deleteRecipe);
}

export default recipeRoutes;
