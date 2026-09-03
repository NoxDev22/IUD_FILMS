import { GENRE_MODEL } from "../model/genreModel.js";

// SOLO FUNCIONA EL METODO GET ALL
export class GENRE_CONTROLLER {
  static async getAll(req, res) {
    try {
      const genres = await GENRE_MODEL.getAll(req.query);
      if (!genres) {
        return res
          .status(404)
          .json({ message: "No hay resultados en su búsqueda" });
      }
      return res.status(200).json(genres);
    } catch (error) {
      // Imprime el error completo en la consola de la terminal
      console.error("Error en getGenres:", error);
      // Devuelve un JSON con el mensaje real del error
      return res.status(500).json({
        message: error.message || "Error interno del servidor",
      });
    }
  }
  static async getById(req, res) {
    try {
      const { genreId } = req.params;
      const genreById = await GENRE_MODEL.getById(genreId);

      if (!genreById) {
        return res.status(404).json({ message: "Genero no encontrada" });
      }
      return res.status(200).json(genreById);
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || "Error al obtener la genero",
      });
    }
  }
  static async create(req, res) {
    try {
      const createdGenre = await GENRE_MODEL.create(req.body);
      return res.status(201).json(createdGenre);
    } catch (error) {
      res
        .status(error.status || 500)
        .json({ message: error.message || "Error al crear el nuevo genero" });
    }
  }
  static async update(req, res) {
    try {
      const { genreId } = req.params;
      const updatedGenre = await GENRE_MODEL.update(genreId, req.body);
      return res.status(200).json(updatedGenre);
    } catch (error) {
      res
        .status(error.status || 500)
        .json({ message: error.message || `!Error al actualizar el genero` });
    }
  }
  static async delete(req, res) {
    try {
      const { genreId } = req.params;
      const deletedGenre = await GENRE_MODEL.delete(genreId);
      return res.status(202).json(deletedGenre);
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || "Error al eliminar el genero",
      });
    }
  }
}
