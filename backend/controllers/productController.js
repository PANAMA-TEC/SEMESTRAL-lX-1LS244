import Product from "../models/productModel.js";
import { isValidObjectId, ObjectId } from "mongoose";

// Obtener todos los productos
export async function getProducts(request, reply) {
  try {
    const products = await Product.find().populate("ingredients").lean();
    return reply.code(200).send({ status: "success", data: products });
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    return reply
      .code(500)
      .send({ status: "error", error: "Error al obtener los productos" });
  }
}

// Obtener producto por ID
export async function getProductById(request, reply) {
  const { id } = request.params;

  if (!isValidObjectId(id)) {
    return reply.code(400).send({ status: "error", error: "ID inválido" });
  }

  try {
    const product = await Product.findById(id).populate("ingredients").lean();
    if (!product) {
      return reply
        .code(404)
        .send({ status: "error", error: "Producto no encontrado" });
    }
    return reply.code(200).send({ status: "success", data: product });
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    return reply
      .code(500)
      .send({ status: "error", error: "Error al obtener el producto" });
  }
}
//Get product by ingredients
export const getProductByIngredients = async (request, reply) => {
  try {
    const { ingredient } = request.params;

    if (!isValidObjectId(ingredient)) {
      return reply
        .code(400)
        .send({ status: "error", error: "ID de ingrediente inválido" });
    }
    const products = await Product.find().lean();

    if (!products) {
      return reply
        .code(404)
        .send({ status: "error", error: "No se encontraron productos" });
    }

    return reply.code(200).send({ status: "success", products });
  } catch (error) {
    console.error("Error en getProductByIngredients:", error);
    reply.code(500).send({ error: "Error interno del servidor" });
  }
};

// Crear un nuevo producto
export async function createProduct(request, reply) {
  try {
    const productData = request.body;
    const newProduct = new Product(productData);
    await newProduct.save();
    return reply.code(201).send({ status: "success", data: newProduct });
  } catch (error) {
    console.error("Error al crear el producto:", error);
    return reply
      .code(500)
      .send({ status: "error", error: "Error al crear el producto" });
  }
}

// Actualizar un producto
export async function updateProduct(request, reply) {
  const { id } = request.params;

  if (!isValidObjectId(id)) {
    return reply.code(400).send({ status: "error", error: "ID inválido" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, request.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct) {
      return reply
        .code(404)
        .send({ status: "error", error: "Producto no encontrado" });
    }

    return reply.code(200).send({ status: "success", data: updatedProduct });
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    return reply
      .code(500)
      .send({ status: "error", error: "Error al actualizar el producto" });
  }
}

// Eliminar un producto
export async function deleteProduct(request, reply) {
  const { id } = request.params;

  if (!isValidObjectId(id)) {
    return reply.code(400).send({ status: "error", error: "ID inválido" });
  }

  try {
    const deleted = await Product.findByIdAndDelete(id);
    if (!deleted) {
      return reply
        .code(404)
        .send({ status: "error", error: "Producto no encontrado" });
    }

    return reply.code(200).send({
      status: "success",
      message: `Producto con ID: ${id} eliminado`,
    });
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    return reply
      .code(500)
      .send({ status: "error", error: "Error al eliminar el producto" });
  }
}
