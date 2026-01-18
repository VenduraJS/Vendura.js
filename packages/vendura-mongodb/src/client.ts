import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URL!;
let client: MongoClient;

export async function getClient() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
  return client;
}
