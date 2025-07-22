import { isValidObjectId } from "mongoose";
import Recipe from "../model/recipeModel.js";

export async function getRecipes(request, reply) {
  try {
    const recipes = await Recipe.find();
    return { status: "success", data: recipes };
  } catch (error) {
    reply.code(500);
    console.error("Error al obtener las recetas:", error);
    return { error: "Error al obtener las recetas", status: "error" };
  }
}

export async function getRecipeId(request, reply) {
  const id = request.params.id;
  if (!isValidObjectId(id)) {
    return reply.code(400).send({ status: "error", error: "ID inválido" });
  }

  try {
    const recipe = await Recipe.findById(id).lean();
    if (!recipe) {
      return reply
        .code(404)
        .send({ status: "error", error: "Receta no encontrada" });
    }
    return reply.code(200).send({ status: "success", data: recipe });
  } catch (error) {
    request.log.error("getRecipeId error:", error);
    console.error("Error al obtener la receta:", error);
    return reply
      .code(500)
      .send({ status: "error", error: "Error al obtener la receta" });
  }
}

export async function createRecipe(request, reply) {
  try {
    const recipeData = request.body;
    const newRecipe = new Recipe(recipeData);
    await newRecipe.save();
    return { status: "success", data: newRecipe };
  } catch (error) {
    reply.code(500);
    console.error("Error al crear la receta:", error);
    return { error: "Error al crear la receta", status: "error" };
  }
}

export async function updateRecipe(request, reply) {
  try {
    const id = request.params.id;
    if (!isValidObjectId(id)) {
      return reply.code(400).send({ status: "error", error: "ID inválido" });
    }

    const updatedData = request.body;
    const updatedRecipe = await Recipe.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedRecipe) {
      return reply
        .code(404)
        .send({ status: "error", error: "Receta no encontrada" });
    }

    return reply.code(200).send({ status: "success", data: updatedRecipe });
  } catch (error) {
    request.log.error("updateRecipe error:", error);
    console.error("Error al actualizar la receta:", error);
    return reply
      .code(500)
      .send({ status: "error", error: "Error al actualizar la receta" });
  }
}
