import express from "express";

const APP = express();
const PORT = 3000;
//Importando routers
import route_main from "./routes/main.js";
//Importando función del cors
import { MIDDLEWARE_CORS } from "./middleware/cors_middleware.js";

APP.use(MIDDLEWARE_CORS());
APP.use("/iudfilms", route_main);

APP.listen(PORT, () => {
  console.log(`Listening in port <http://localhost>:${PORT} `);
});
