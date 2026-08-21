import mongoose from "mongoose";

const typeSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, unique: true },
    descripcion: { type: String, required: true },
    fecha_creacion: { type: String },
    fecha_actualizacion: { type: String },
  },
  { timestamps: true, collection: "type" },
);

export default mongoose.model("Type", typeSchema);
