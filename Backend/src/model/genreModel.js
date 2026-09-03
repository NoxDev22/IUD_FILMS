import mongoose from "mongoose";
// Schemas
import Genre from "../schemas/genreSchema.js";

export class GENRE_MODEL {
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
    const [allGenres, totalCount] = await Promise.all([
      Genre.find(query).skip(numericOffset).limit(numericLimit).lean(),
      Genre.countDocuments(query),
    ]);

    return {
      total: totalCount,
      results: allGenres.length,
      offset: numericOffset,
      limit: numericLimit,
      data: allGenres,
    };
  }
  static async getById(genreId) {
    // Validación previa para evitar que BSON falle si el ID no es válido
    if (!mongoose.Types.ObjectId.isValid(genreId)) {
      const error = new Error("El ID proporcionado no es un ObjectId válido");
      error.status = 400;
      throw error;
    }

    // findById acepta directamente el string del ID
    const genre = await Genre.findById(genreId).lean();

    return genre;
  }
  static async create(genreData) {
    // 1. Validar únicamente que el enero no exista por su título
    const existingGenre = await Genre.findOne({
      nombre: { $regex: new RegExp(`^${genreData.nombre.trim()}$`, "i") },
    });

    if (existingGenre) {
      const error = new Error(
        "El genero ya se encuentra registrado en la base de datos.",
      );
      error.statusCode = 400;
      throw error;
    }
    // Creamos el nuevo documento
    const newGenre = new Genre(genreData);
    await newGenre.save();

    // Retornamos el elemento creado
    return await Genre.findById(newGenre._id).lean();
  }
  static async update(id, genre) {
    // 1. Validar que el ID tenga un formato de ObjectId válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error("El ID proporcionado no es un ObjectId válido");
      error.status = 400;
      throw error;
    }
    const updatedGenre = await Genre.findByIdAndUpdate(id, genre, {
      returnDocument: "after",
      runValidators: true,
    }).lean();

    return updatedGenre;
  }
  static async delete(genreId) {
    if (!mongoose.Types.ObjectId.isValid(genreId)) {
      const error = new Error("El ID proporcionado no es un ObjectId válido");
      error.status = 400;
      throw error;
    }

    const deletedGenre = await Genre.findByIdAndDelete(genreId);
    return deletedGenre;
  }
}
