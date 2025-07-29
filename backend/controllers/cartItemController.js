import { isValidObjectId } from "mongoose";

import CartItem from "../models/cartItemModel.js";

export const addToCart = async (request, reply) => {
  try {
    const { userID, recipeID } = request.body;

    if (!isValidObjectId(userID) || !isValidObjectId(recipeID)) {
      return reply
        .code(400)
        .send({ status: "error", error: "userID o recipeID inválido" });
    }

    let cart = await CartItem.findOne({ userID });

    if (!cart) {
      cart = new CartItem({
        userID,
        items: [{ recipe: recipeID }],
      });
      await cart.save();
      return reply.code(201).send({ status: "success", cart });
    }

    // Si ya existe el carrito, verificamos si la receta ya está
    const alreadyExists = cart.items.some(
      (item) => item.recipe.toString() === recipeID
    );

    if (alreadyExists) {
      return reply.code(200).send({
        status: "success",
        message: "Receta ya está en el carrito",
      });
    }

    cart.items.push({ recipeID });
    await cart.save();

    return reply.code(200).send({ status: "success", cart });
  } catch (error) {
    console.error("Error en addToCart:", error);
    reply.code(500).send({ error: "Error interno del servidor" });
  }
};

export const getCart = async (request, reply) => {
  try {
    const { userID } = request.params;

    if (!isValidObjectId(userID)) {
      return reply
        .code(400)
        .send({ status: "error", error: "userID inválido" });
    }

    const cart = await CartItem.findOne({ userID }).populate({
      path: "items.recipe",
      select: "title ingredients",
    });

    if (!cart) {
      return reply
        .code(404)
        .send({ status: "error", error: "Carrito no encontrado" });
    }

    return reply.code(200).send({ status: "success", cart });
  } catch (error) {
    console.error("Error en getCart:", error);
    reply.code(500).send({ error: "Error interno del servidor" });
  }
};

export const removeFromCart = async (request, reply) => {
  try {
    const { userID, recipeID } = request.body;

    if (!isValidObjectId(userID) || !isValidObjectId(recipeID)) {
      return reply
        .code(400)
        .send({ status: "error", error: "userID o recipeID inválido" });
    }

    const cart = await CartItem.findOne({ userID });

    if (!cart) {
      return reply
        .code(404)
        .send({ status: "error", error: "Carrito no encontrado" });
    }

    cart.items = cart.items.filter(
      (item) => item.recipe.toString() !== recipeID
    );

    await cart.save();

    return reply.code(200).send({ status: "success", cart });
  } catch (error) {
    console.error("Error en removeFromCart:", error);
    reply.code(500).send({ error: "Error interno del servidor" });
  }
};
