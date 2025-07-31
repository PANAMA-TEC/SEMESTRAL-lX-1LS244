import Order from "../models/orderModel.js";

export async function createStripeSession(req, reply) {
  const { orderID } = req.params;

  const order = await Order.findById(orderID).lean();
  if (!order) {
    return reply.status(404).send({ error: "Orden no encontrada" });
  }

  const stripe = req.server.stripe;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: order.items.map((item) => ({
      price_data: {
        currency: "pab",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    })),
    success_url: `http://localhost:5173/user_panel?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `http://localhost:3000/cancel`,
    metadata: {
      orderId: order._id.toString(),
    },
  });

  return reply.send({ url: session.url });
}

export async function handleStripeSuccess(req, reply) {
  const sessionId = req.params.sessionId;

  try {
    const stripe = req.server.stripe;

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
      const orderId = session.metadata.orderId;
      await Order.findByIdAndUpdate(orderId, { status: "pagado" });

      return reply.send({ status: "updated", orderId });
    } else {
      return reply.send({
        status: "unpaid",
        message: "El pago no se completó",
      });
    }
  } catch (err) {
    req.log.error(err);
    return reply.status(500).send({ error: "Error al verificar pago" });
  }
}
