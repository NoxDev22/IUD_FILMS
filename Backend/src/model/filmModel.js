import mongoose from "mongoose";
// Schemas
import Film from "../schemas/filmSchema.js";
import Director from "../schemas/directorSchema.js";
import Gender from "../schemas/genreSchema.js";
import Type from "../schemas/typeSchema.js";

export class FILM_MODEL {
  static async getAll({
    titulo,
    genero,
    director,
    tipo,
    offset = 0,
    limit,
  } = {}) {
    const query = {};

    // 1. Filtro por título (este sí es un String directo en Film)
    if (titulo) {
      query.titulo = { $regex: titulo, $options: "i" };
    }

    // 2. Filtro por Director (por nombre o parcial)
    if (director) {
      const directoresEncontrados = await Director.find(
        { nombre: { $regex: director, $options: "i" } },
        "_id",
      );
      const directorIds = directoresEncontrados.map((d) => d._id);
      query.director = { $in: directorIds };
    }

    // 3. Filtro por Género (por nombre o parcial)
    if (genero) {
      const generosEncontrados = await Gender.find(
        { nombre: { $regex: genero, $options: "i" } },
        "_id",
      );
      const generoIds = generosEncontrados.map((g) => g._id);
      query.genero = { $in: generoIds };
    }

    // 4. Filtro por Tipo (por nombre o parcial)
    if (tipo) {
      const tiposEncontrados = await Type.find(
        { nombre: { $regex: tipo, $options: "i" } },
        "_id",
      );

      const tipoIds = tiposEncontrados.map((t) => t._id);
      query.tipo = { $in: tipoIds };
    }

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
        .lean(),
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
