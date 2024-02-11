/* eslint-disable @typescript-eslint/ban-types */
import { IResolvers } from "@graphql-tools/utils";
import { ObjectId } from "mongodb";
import { Database, Listing } from "../../../lib/types";

export const listingResolvers: IResolvers = {
  Query: {
    listings: async (
      _root: undefined,
      _args: {},
      { db }: { db: Database }
    ): Promise<Listing[]> => {
      return await db.listings.find({}).toArray();
    },
  },
  Mutation: {
    deleteListing: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database }
    ): Promise<Listing> => {
      const deleteRes = await db.listings.findOneAndDelete({
        _id: new ObjectId(id),
      });
      if (!deleteRes?._id) {
        throw new Error("Listing not found");
      }
      return deleteRes;
    },
  },
  Listing: {
    id: (listing: Listing) => listing._id.toString(),
  },
};
