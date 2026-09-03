import mongoose from "mongoose";
// Schemas
import Director from "../schemas/directorSchema.js";

// SOLO FUNCIONA EL METOD GET ALL
export class DIRECTOR_MODEL {
  static async getAll({ nombre, estado, offset = 0, limit } = {}) {
    const query = {};
    // 1. Filtro por Nombre(este sí es un String directo en Film)
    if (nombre) {
      query.nombre = { $regex: nombre, $options: "i" };
    }
    // 2. Filtro por Estado (por nombre o parcial)
    if (estado) {
      query.estado = { $regex: estado, $options: "i" };
    }
    const numericOffset = Math.max(0, Number(offset));
    const numericLimit = Math.max(1, Number(limit));

    // Ejecutamos la consulta y el conteo total en paralelo para mayor velocidad
    const [allDirectors, totalCount] = await Promise.all([
      Director.find(query).skip(numericOffset).limit(numericLimit).lean(),
      Director.countDocuments(query),
    ]);

    return {
      total: totalCount,
      results: allDirectors.length,
      offset: numericOffset,
      limit: numericLimit,
      data: allDirectors,
    };
  }
  static async getById(directorId) {
    // Validación previa para evitar que BSON falle si el ID no es válido
    if (!mongoose.Types.ObjectId.isValid(directorId)) {
      const error = new Error("El ID proporcionado no es un ObjectId válido");
      error.status = 400;
      throw error;
    }
    // findById acepta directamente el string del ID
    const director = await Director.findById(directorId).lean();

    return director;
  }
  static async create(directorData) {
    // 1. Validar únicamente que el filme no exista por su título
    const existingDirector = await Director.findOne({
      nombre: { $regex: new RegExp(`^${directorData.nombre.trim()}$`, "i") },
    });

    if (existingDirector) {
      const error = new Error(
        "El director ya se encuentra registrado en la base de datos.",
      );
      error.statusCode = 400;
      throw error;
    }
    // Creamos el nuevo documento
    const newDirector = new Director(directorData);
    await newDirector.save();

    // Retornamos el elemento creado
    return await Director.findById(newDirector._id).lean();
  }
  static async update(id, director) {
    // 1. Validar que el ID tenga un formato de ObjectId válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error("El ID proporcionado no es un ObjectId válido");
      error.status = 400;
      throw error;
    }
    const updatedDirector = await Director.findByIdAndUpdate(id, director, {
      returnDocument: "after",
      runValidators: true,
    }).lean();

    return updatedDirector;
  }
  static async delete(directorId) {
    if (!mongoose.Types.ObjectId.isValid(directorId)) {
      const error = new Error("El ID proporcionado no es un ObjectId válido");
      error.status = 400;
      throw error;
    }

    const deletedDirector = await Director.findByIdAndDelete(directorId);
    return deletedDirector;
  }
}
