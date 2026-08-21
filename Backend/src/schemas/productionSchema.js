import mongoose from "mongoose";

const productionSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, unique: true },
    estado: { type: String, enum: ["Activo", "Inactivo"], default: "Activo" },
    slogan: { type: String },
    descripcion: { type: String },
    fecha_creacion: { type: String },
    fecha_actualizacion: { type: String },
  },
  { timestamps: true, collection: "production" },
);

export default mongoose.model("Production", productionSchema);
