import CartItem from "../models/cartItemModel.js";
//Delete cartItem by userID

export async function deleteCartItemByUserId(userID) {
  const cartItem = await CartItem.findOne({ userID });
  if (!cartItem) {
    return { error: "Cart item not found" };
  }
  await cartItem.deleteOne();
  return { message: "Cart item deleted successfully" };
}
