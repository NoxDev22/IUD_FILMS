import "dotenv/config";
import express from "express";
// Importando el archivo que contiene la clase para la conexión
import dbClient from "./config/dbClient.js";

const APP = express();
const PORT = process.env.PORT || 3000;
//Importando routers
import route_main from "./routes/main.js";
import route_genre from "./routes/genre.js";
import route_director from "./routes/director.js";
import route_type from "./routes/type.js";
import route_production from "./routes/production.js";
//Importando función del cors
import { MIDDLEWARE_CORS } from "./middleware/cors_middleware.js";

APP.use(MIDDLEWARE_CORS());
APP.use(express.json());
APP.use("/iud_films", route_main);
APP.use("/iud_genres", route_genre);
APP.use("/iud_directors", route_director);
APP.use("/iud_types", route_type);
APP.use("/iud_productions", route_production);

APP.listen(PORT, () => {
  console.log(`Listening in port <http://localhost>: ${PORT} `);
});

process.on("SIGINT", async () => {
  dbClient.closeConnect;
  process.exit(0);
});
