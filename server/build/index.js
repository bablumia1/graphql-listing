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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const seed_1 = require("./seed");
/* eslint-disable @typescript-eslint/no-explicit-any */
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const graphql_1 = require("./graphql");
const database_1 = require("./database");
function startApolloServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const db = yield (0, database_1.connectDatabse)();
        const app = (0, express_1.default)();
        const PORT = process.env.PORT || 9000;
        app.use(express_1.default.json());
        const server = new apollo_server_express_1.ApolloServer({
            typeDefs: graphql_1.typeDefs,
            resolvers: graphql_1.resolvers,
            context: () => ({ db }),
        });
        yield server.start();
        server.applyMiddleware({ app: app, path: "/api" });
        app.get("/insert", (_req, res) => {
            (0, seed_1.seed)();
            res.send("Data insert siccess");
        });
        app.listen(PORT, () => {
            console.log(`App listening at http://localhost:${PORT}`);
        });
        // const list = await db.listings.find({}).toArray();
        // console.log(list);
    });
}
startApolloServer().catch((error) => {
    console.error("Error starting Apollo Server:", error);
});
//# sourceMappingURL=index.js.map