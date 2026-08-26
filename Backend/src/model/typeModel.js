import mongoose from "mongoose";
// Schemas
import Type from "../schemas/typeSchema.js";

// SOLO FUNCIONA EL METOD GET ALL
export class TYPE_MODEL {
  static async getAll({ nombre, offset = 0, limit } = {}) {
    const query = {};
    // 1. Filtro por Nombre(este sí es un String directo en Film)
    if (nombre) {
      query.nombre = { $regex: nombre, $options: "i" };
    }
    const numericOffset = Math.max(0, Number(offset));
    const numericLimit = Math.max(1, Number(limit));

    // Ejecutamos la consulta y el conteo total en paralelo para mayor velocidad
    const [allTypes, totalCount] = await Promise.all([
      Type.find(query).skip(numericOffset).limit(numericLimit).lean(),
      Type.countDocuments(query),
    ]);

    return {
      total: totalCount,
      results: allTypes.length,
      offset: numericOffset,
      limit: numericLimit,
      data: allTypes,
    };
  }
  static async getById(filmId) {
    // Validación previa para evitar que BSON falle si el ID no es válido
    if (!mongoose.Types.ObjectId.isValid(filmId)) {
      const error = new Error("El ID proporcionado no es un ObjectId válido");
      error.status = 400;
      throw error;
    }

    // findById acepta directamente el string del ID
    const film = await Film.findById(filmId)
      .populate("genero", "nombre")
      .populate("director", "nombre")
      .populate("productora", "nombre")
      .populate("tipo", "nombre")
      .lean();

    return film;
  }
  static async create(film) {
    // Creamos el nuevo documento
    const newFilm = new Film(film);
    await newFilm.save();
    // Retornamos el elemento creado populando sus referencias
    return await Film.findById(newFilm._id)
      .populate("genero", "nombre")
      .populate("director", "nombre")
      .populate("productora", "nombre")
      .populate("tipo", "nombre")
      .lean();
  }
  static async update(id, film) {
    // 1. Validar que el ID tenga un formato de ObjectId válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error("El ID proporcionado no es un ObjectId válido");
      error.status = 400;
      throw error;
    }
    const updatedFilm = await Film.findByIdAndUpdate(id, film, {
      returnDocument: "after",
      runValidators: true,
    })
      .populate("genero", "nombre")
      .populate("director", "nombre")
      .populate("productora", "nombre")
      .populate("tipo", "nombre")
      .lean();

    return updatedFilm;
  }
  static async delete(filmId) {
    if (!mongoose.Types.ObjectId.isValid(filmId)) {
      const error = new Error("El ID proporcionado no es un ObjectId válido");
      error.status = 400;
      throw error;
    }

    const deletedFilm = await Film.findByIdAndDelete(filmId);
    return deletedFilm;
  }
}
