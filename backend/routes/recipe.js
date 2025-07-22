import {
  getRecipes,
  createRecipe,
  getRecipeId,
} from "../controllers/recipeController.js";

async function recipeRoutes(fastify) {
  //GET all recipes
  fastify.get("/", getRecipes);
  //GET a specific recipe by ID
  fastify.get("/:id", getRecipeId);

  //POST a new recipe
  fastify.post("/", createRecipe);

  //PUT to update a recipe by ID
  fastify.put("/:id", async (request) => {
    const { id } = request.params;
    const updatedData = request.body;
    return {
      message: `Recipe with ID: ${id} Updated`,
      data: updatedData,
    };
  });

  //DELETE a recipe by ID
  fastify.delete("/:id", async (request) => {
    const { id } = request.params;
    return {
      message: `Recipe with ID: ${id} Deleted`,
    };
  });
}

export default recipeRoutes;
