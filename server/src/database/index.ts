import { MongoClient } from "mongodb";
import { Database } from "../lib/types";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.DB_URL;

export const connectDatabse = async (): Promise<Database> => {
  const client = await MongoClient.connect(url as string);
  const db = client.db("graphql_listing");

  return {
    listings: db.collection("test_listings"),
  };
};
