import "dotenv/config";
import express from "express";
// Importando el archivo que contiene la clase para la conexión
import dbClient from "./config/dbClient.js";

const APP = express();
const PORT = process.env.PORT || 3000;
//Importando routers
import route_main from "./routes/main.js";
//Importando función del cors
import { MIDDLEWARE_CORS } from "./middleware/cors_middleware.js";

APP.use(MIDDLEWARE_CORS());
APP.use(express.json());
APP.use("/iudfilms", route_main);

APP.listen(PORT, () => {
  console.log(`Listening in port <http://localhost>: ${PORT} `);
});

process.on("SIGINT", async () => {
  dbClient.closeConnect;
  process.exit(0);
});
