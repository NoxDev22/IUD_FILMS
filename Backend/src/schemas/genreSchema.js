import mongoose from "mongoose";

const genderSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, unique: true },
    estado: { type: String, enum: ["Activo", "Inactivo"], default: "Activo" },
    descripcion: { type: String },
    fecha_creacion: { type: String },
    fecha_actualizacion: { type: String },
  },
  { timestamps: true, collection: "gender" },
);

export default mongoose.model("Gender", genderSchema);
