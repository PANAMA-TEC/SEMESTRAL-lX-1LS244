import { getCheckoutSummary } from "../service/productService.js";

export async function checkoutSummary(request, reply) {
  try {
    const { userID } = request.body;

    const summary = await getCheckoutSummary(userID);

    return reply.code(200).send({
      status: "success",
      data: summary,
    });
  } catch (error) {
    console.error("checkoutSummaryController error:", error);
    return reply.code(400).send({
      status: "error",
      error: error.message,
    });
  }
}
