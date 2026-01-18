import { Order } from "vendura-core";
import { getClient } from "./client";

const COLLECTION = "vendura_orders";

export async function saveOrder(order: Order) {
  const client = await getClient();
  await client.db().collection(COLLECTION).updateOne(
    { id: order.id },
    { $set: order },
    { upsert: true }
  );
}

export async function getOrder(id: string): Promise<Order | null> {
  const client = await getClient();
  return client.db().collection<Order>(COLLECTION).findOne({ id });
}
