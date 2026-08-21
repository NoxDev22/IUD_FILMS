import mongoose from "mongoose";

const directorSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, unique: true },
    estado: { type: String, enum: ["Activo", "Inactivo"], default: "Activo" },
    fecha_creacion: {
      type: String,
    },
    fecha_actualizacion: {
      type: String,
    },
  },
  { timestamps: true, collection: "director" },
);

export default mongoose.model("Director", directorSchema);
