import Recipe from "../models/recipeModel.js";
import Ingredient from "../models/ingredientModel.js";
import Product from "../models/productModel.js";
import Cart from "../models/cartItemModel.js";
import { isValidObjectId } from "mongoose";

export async function getProductsFromRecipe(recipeId) {
  //implementar un middelware para validar el objecto ID
  if (!isValidObjectId(recipeId)) {
    throw new Error("ID de receta inválido");
  }

  const recipe = await Recipe.findById(recipeId).lean();
  if (!recipe) {
    throw new Error("Receta no encontrada");
  }

  const ingredientIds = recipe.ingredients
    .map((i) => i.ingredient)
    .filter((id) => isValidObjectId(id));

  const products = await Product.find({
    ingredientIds: { $in: ingredientIds },
  }).populate("ingredients");

  return products;
}

export async function getCartItemsbyUserID(userID) {
  if (!isValidObjectId(userID)) {
    throw new Error("ID de usuario inválido");
  }

  const cart = await Cart.findOne({ userID }).lean();
  if (!cart?.items || cart.items.length === 0) {
    throw new Error("Carrito vacío o no encontrado");
  }

  const recipeIds = cart.items.map((item) => item.recipe);

  const recipes = await Recipe.find({ _id: { $in: recipeIds } })
    .select("title ingredients")
    .lean();

  const allIngredientIds = recipes
    .flatMap((r) => r.ingredients.map((i) => i.ingredient))
    .filter((id) => isValidObjectId(id));

  const uniqueIngredientIds = [
    ...new Set(allIngredientIds.map((id) => id.toString())),
  ];
  const counts = {};
  allIngredientIds.forEach((id) => {
    counts[id] = (counts[id] || 0) + 1;
  });

  const ingredients = await Ingredient.find({
    _id: { $in: uniqueIngredientIds },
  }).select("name unit price");

  const items = ingredients.map((ing) => ({
    ingredient: ing._id.toString(),
    name: ing.name,
    unit: ing.unit,
    quantity: counts[ing._id.toString()] || 0,
    price: ing.price,
  }));

  const products = await Product.find({
    ingredients: { $in: uniqueIngredientIds },
  }).populate("ingredients");

  const productsByIngredient = {};
  for (const product of products) {
    for (const ingId of product.ingredients) {
      const key = ingId.toString();
      if (!productsByIngredient[key]) {
        productsByIngredient[key] = [];
      }
      productsByIngredient[key].push(product);
    }
  }

  return {
    //recipes,
    items,
    subtotal: 0,
    total: 0,
    //productsByIngredient,
  };
}
