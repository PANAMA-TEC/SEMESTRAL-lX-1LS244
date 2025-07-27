import { isValidObjectId } from "mongoose";
import Ingredient from "../models/ingredientModel.js";

export async function getIngredients(request, reply) {
  try {
    const ingredients = await Ingredient.find().limit(10).lean();
    return reply.code(200).send({ status: "success", data: ingredients });
  } catch (error) {
    console.error("Error al obtener los ingredientes:", error);
    return reply
      .code(500)
      .send({ error: "Error al obtener los ingredientes", status: "error" });
  }
}

export async function getIngredientsById(request, reply) {
  const id = request.params.id;
  if (!isValidObjectId(id)) {
    return reply.code(400).send({ status: "error", erorr: "ID invalido" });
  }
  try {
    const ingredient = await Ingredient.findById(id).lean();
    if (!ingredient) {
      return reply
        .code(404)
        .send({ status: "error", error: "Ingrediente no encontrado" });
    }
    return reply.code(200).send({ status: "success", data: ingredient });
  } catch (error) {
    console.error("Error al obtener el ingrediente:", error);
    return reply
      .code(500)
      .send({ status: "error", error: "Error al obtener el ingrediente" });
  }
}

export async function createIngredient(request, reply) {
  try {
    const ingredientData = request.body;
    const newIngredient = new Ingredient(ingredientData);
    await newIngredient.save();
    return reply.code(201).send({ status: "success", data: newIngredient });
  } catch (error) {
    console.error("Error al crear el ingrediente:", error);
    return reply
      .code(500)
      .send({ error: "Error al crear el ingrediente", status: "error" });
  }
}

export async function updateIngredient(request, reply) {
  const id = request.params.id;
  if (!isValidObjectId(id)) {
    return reply.code(400).send({ status: "error", error: "ID inválido" });
  }

  try {
    const updatedData = request.body;
    const updatedIngredient = await Ingredient.findByIdAndUpdate(
      id,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedIngredient) {
      return reply
        .code(404)
        .send({ status: "error", error: "Ingrediente no encontrado" });
    }

    return reply.code(200).send({ status: "success", data: updatedIngredient });
  } catch (error) {
    console.error("Error al actualizar el ingrediente:", error);
    return reply
      .code(500)
      .send({ status: "error", error: "Error al actualizar el ingrediente" });
  }
}

export async function deleteIngredient(request, reply) {
  const id = request.params.id;
  if (!isValidObjectId(id)) {
    return reply.code(400).send({ status: "error", error: "ID inválido" });
  }

  try {
    const deletedIngredient = await Ingredient.findByIdAndDelete(id);
    if (!deletedIngredient) {
      return reply
        .code(404)
        .send({ status: "error", error: "Ingrediente no encontrado" });
    }
    return reply.code(200).send({ status: "success", data: deletedIngredient });
  } catch (error) {
    console.error("Error al eliminar el ingrediente:", error);
    return reply
      .code(500)
      .send({ status: "error", error: "Error al eliminar el ingrediente" });
  }
}

export async function updateIngredientAvailability(request, reply) {
  const id = request.params.id;
  if (!isValidObjectId(id)) {
    return reply.code(400).send({ status: "error", error: "ID inválido" });
  }

  try {
    const updatedIngredient = await Ingredient.findByIdAndUpdate(
      id,
      [{ $set: { availableAsProduct: { $not: "$availableAsProduct" } } }],
      { new: true, runValidators: true }
    );

    if (!updatedIngredient) {
      return reply
        .code(404)
        .send({ status: "error", error: "Ingrediente no encontrado" });
    }

    return reply.code(200).send({ status: "success", data: updatedIngredient });
  } catch (error) {
    console.error(
      "Error al actualizar la disponibilidad del ingrediente:",
      error
    );
    return reply.code(500).send({
      status: "error",
      error: "Error al actualizar la disponibilidad del ingrediente",
    });
  }
}
