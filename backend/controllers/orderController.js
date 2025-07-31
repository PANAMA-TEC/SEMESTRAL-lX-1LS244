import Order from "../models/orderModel.js";

export async function getOrder(request, reply) {
  const { userID } = request.params;
  if (!userID) {
    return reply
      .code(400)
      .send({ status: "error", error: "UserID is required" });
  }

  try {
    const order = await Order.find({ userID })
      .populate("items.ingredient")
      .lean();
    return reply.code(200).send({ status: "success", data: order });
  } catch (error) {
    console.error("Error al obtener la order:", error);
    return reply
      .code(500)
      .send({ status: "error", error: "Error al obtener la orden" });
  }
}

export async function createOrder(request, reply) {
  const { userID } = request.params;
  const { items, total, subtotal } = request.body;
  if (!userID || !items) {
    return reply
      .code(400)
      .send({ status: "error", error: "UserID is required" });
  }
  try {
    const order = await Order.create({ userID, items, total, subtotal });
    return reply.code(200).send({ status: "success", data: order });
  } catch (error) {
    console.error("Error al crear la orden:", error);
    return reply
      .code(500)
      .send({ status: "error", error: "Error al crear la orden" });
  }
}

export async function updateOrder(request, reply) {
  const { orderID } = request.params;
  const { items, total, subtotal, status } = request.body;
  if (!orderID || !items || !total || !status) {
    return reply
      .code(400)
      .send({ status: "error", error: "OrderID y items son requeridos" });
  }
  try {
    const order = await Order.findByIdAndUpdate(
      orderID,
      { items, total, subtotal, status },
      { new: true }
    );
    return reply.code(200).send({ status: "success", data: order });
  } catch (error) {
    console.error("Error al actualizar la order:", error);
    return reply
      .code(500)
      .send({ status: "error", error: "Error al actualizar la order" });
  }
}
