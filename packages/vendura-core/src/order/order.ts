import { Cart, Order } from "../types";
import { randomUUID } from "crypto";

export function createOrder(cart: Cart): Order {
  return {
    id: randomUUID(),
    cartId: cart.id,
    items: cart.items,
    total: cart.total,
    state: "CREATED",
    createdAt: new Date()
  };
}
