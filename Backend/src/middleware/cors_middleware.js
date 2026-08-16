import cors from "cors";

const VALID_ROUTES = ["http://localhost:5173"];
export const MIDDLEWARE_CORS = ({ acceptedOrigin = VALID_ROUTES } = {}) => {
  return cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (acceptedOrigin.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("!Error la ruta no es valida"));
      }
    },
  });
};
