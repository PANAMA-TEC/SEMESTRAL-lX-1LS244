import {
  createComment,
  getCommentsByRecipe,
} from "../controllers/commentController.js";

async function commentRoutes(fastify) {
  //GET a specific recipe by ID
  fastify.get("/:recipeID", getCommentsByRecipe);

  //POST a new recipe
  fastify.post("/:recipeID", createComment);
}

export default commentRoutes;
