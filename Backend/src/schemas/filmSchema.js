import mongoose from "mongoose";
// Importas los modelos exportados
import Gender from "./genreSchema.js";
import Director from "./directorSchema.js";
import Production from "./productionSchema.js";
import Type from "./typeSchema.js";

const filmSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    sinopsis: { type: String, required: true },
    url_pelicula: { type: String, required: true },
    img_portada: { type: String, required: true },
    duracion: { type: String, required: true },
    fecha_estreno: { type: String, required: true },
    temporadas: { type: Number, default: null },

    // Referencias
    genero: { type: mongoose.Schema.Types.ObjectId, ref: Gender },
    director: { type: mongoose.Schema.Types.ObjectId, ref: Director },
    productora: { type: mongoose.Schema.Types.ObjectId, ref: Production },
    tipo: { type: mongoose.Schema.Types.ObjectId, ref: Type },
  },
  {
    timestamps: true, // Maneja automáticamente createdAt y updatedAt como fechas reales
    collection: "films",
  },
);

export default mongoose.model("Film", filmSchema);
