import mongoose from "mongoose";
import Film from "../schemas/filmSchema.js";

export class MODEL {
  static async getAll({
    titulo,
    genero,
    director,
    tipo,
    offset = 0,
    limit = 10,
  } = {}) {
    const query = {};

    // Filtros opcionales
    if (titulo) {
      query.titulo = { $regex: titulo, $options: "i" };
    }
    if (genero) query.genero = genero;
    if (director) query.director = director;
    if (tipo) query.tipo = tipo;

    const numericOffset = Math.max(0, Number(offset));
    const numericLimit = Math.max(1, Number(limit));

    // Ejecutamos la consulta y el conteo total en paralelo para mayor velocidad
    const [allFilms, totalCount] = await Promise.all([
      Film.find(query)
        .populate("genero", "nombre")
        .populate("director", "nombre")
        .populate("productora", "nombre")
        .populate("tipo", "nombre")
        .skip(numericOffset)
        .limit(numericLimit)
        .lean(), // .lean() mejora el rendimiento si solo vas a leer datos (convierte documentos a objetos JS puros)
      Film.countDocuments(query),
    ]);

    return {
      total: totalCount,
      results: allFilms.length,
      offset: numericOffset,
      limit: numericLimit,
      data: allFilms,
    };
  }

  static async getById(filmId) {
    return await Film.findById(filmId);
  }

  static async create(film) {
    return await Film.create(film);
  }

  static async update(id, film) {
    return await Film.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(id) },
      film,
      { new: true },
    );
  }
  static async delete(id) {
    return await Film.findOneAndDelete({
      _id: new mongoose.Types.ObjectId(id),
    });
  }
}
