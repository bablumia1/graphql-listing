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
exports.seed = void 0;
const index_1 = require("./database/index");
const listings_1 = require("./listings");
const seed = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield (0, index_1.connectDatabse)();
        for (const listing of listings_1.listings) {
            yield db.listings.insertOne(listing);
        }
    }
    catch (error) {
        throw new Error("Faild to seed data");
    }
});
exports.seed = seed;
//# sourceMappingURL=seed.js.map