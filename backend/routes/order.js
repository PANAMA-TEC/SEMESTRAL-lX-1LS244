import {
  getOrder,
  createOrder,
  updateOrder,
} from "../controllers/orderController.js";
import { OrderSchema } from "../models/orderModel.js";

export default async function orderRoutes(fastify) {
  //Get Orden by UserID
  fastify.get("/:userID", {
    schema: {
      tags: ["Order"],
      sumary: "Obtener orden por usuario",
      params: {
        type: "object",
        properties: {
          userID: { type: "string" },
        },
      },
    },
    handler: getOrder,
  });

  //Post orden by userID
  fastify.post("/:userID", {
    schema: {
      tags: ["Order"],
      sumary: "Agregar nuevo Order por usuario",
      body: OrderSchema,
    },
    handler: createOrder,
  });

  fastify.put("/:id", {
    schema: {
      tags: ["Order"],
      sumary: "Actualizar orden por ID",
      body: OrderSchema,
      params: {
        type: "object",
        properties: {
          orderID: { type: "string" },
        },
      },
    },
    handler: updateOrder,
  });
}
