import { Cart, Order } from "../types";
import { randomUUID } from "crypto";

export function createOrder(cart: Cart): Order {
  // Defensive: ensure total.amount is a valid number
  const totalAmount =
    cart.total && typeof cart.total.amount === "number" && cart.total.amount != null
      ? cart.total.amount
      : cart.items.reduce((sum, item) => {
          const price = typeof item.price === "number" ? item.price : 0;
          const quantity = typeof item.quantity === "number" ? item.quantity : 0;
          return sum + price * quantity;
        }, 0);
  return {
    id: randomUUID(),
    cartId: cart.id,
    items: cart.items,
    total: {
      amount: totalAmount,
      currency: cart.total?.currency || "INR"
    },
    state: "CREATED",
    createdAt: new Date()
  };
}
