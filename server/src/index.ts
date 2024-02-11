import { seed } from "./seed";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloServer } from "apollo-server-express";
import express, { Application, urlencoded } from "express";
import { resolvers, typeDefs } from "./graphql";
import { connectDatabse } from "./database";

async function startApolloServer() {
  const db = await connectDatabse();
  const app: Application = express();
  const PORT = process.env.PORT || 9000;

  app.use(express.json());

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db }),
  });
  await server.start();

  server.applyMiddleware({ app: app as any, path: "/api" });

  app.get("/insert", (_req, res) => {
    seed();
    res.send("Data insert siccess");
  });

  app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });

  // const list = await db.listings.find({}).toArray();
  // console.log(list);
}

startApolloServer().catch((error) => {
  console.error("Error starting Apollo Server:", error);
});
