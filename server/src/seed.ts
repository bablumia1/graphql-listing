import { connectDatabse } from "./database/index";
import { listings } from "./listings";

export const seed = async () => {
  try {
    const db = await connectDatabse();
    for (const listing of listings) {
      await db.listings.insertOne(listing);
    }
  } catch (error) {
    throw new Error("Faild to seed data");
  }
};
