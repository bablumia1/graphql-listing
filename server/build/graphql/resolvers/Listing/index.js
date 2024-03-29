"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listingResolvers = void 0;
const mongodb_1 = require("mongodb");
exports.listingResolvers = {
    Query: {
        listings: (_root, _args, { db }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield db.listings.find({}).toArray();
        }),
    },
    Mutation: {
        deleteListing: (_root, { id }, { db }) => __awaiter(void 0, void 0, void 0, function* () {
            const deleteRes = yield db.listings.findOneAndDelete({
                _id: new mongodb_1.ObjectId(id),
            });
            if (!(deleteRes === null || deleteRes === void 0 ? void 0 : deleteRes._id)) {
                throw new Error("Listing not found");
            }
            return deleteRes;
        }),
    },
    Listing: {
        id: (listing) => listing._id.toString(),
    },
};
//# sourceMappingURL=index.js.map