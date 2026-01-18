import { Cart } from "vendura-core";
import { getClient } from "./client";

const COLLECTION = "vendura_carts";

export async function saveCart(cart: Cart) {
  const client = await getClient();
  await client.db().collection(COLLECTION).updateOne(
    { id: cart.id },
    { $set: cart },
    { upsert: true }
  );
}

export async function getCart(id: string): Promise<Cart | null> {
  const client = await getClient();
  return client.db().collection<Cart>(COLLECTION).findOne({ id });
}
