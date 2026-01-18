import { Cart, CartItem } from "../types";
import { randomUUID } from "crypto";

export function createCart(): Cart {
  return {
    id: randomUUID(),
    items: [],
    total: { amount: 0, currency: "INR" },
    createdAt: new Date(),
    updatedAt: new Date()
  };
}

export function addItem(cart: Cart, item: CartItem): Cart {
  cart.items.push(item);
  cart.total.amount += item.price.amount * item.quantity;
  cart.updatedAt = new Date();
  return cart;
}
