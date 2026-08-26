import { TYPE_MODEL } from "../model/typeModel.js";

// SOLO FUNCIONA EL METOD GET ALL
export class TYPE_CONTROLLER {
  static async getAll(req, res) {
    try {
      const types = await TYPE_MODEL.getAll(req.query);
      console.log(types);
      if (!types) {
        return res
          .status(404)
          .json({ message: "No hay resultados en su busqueda" });
      }
      return res.status(200).json(types);
    } catch (error) {
      // Imprime el error completo en la consola de la terminal
      console.error("Error en getFilms:", error);
      // Devuelve un JSON con el mensaje real del error
      return res.status(500).json({
        message: error.message || "Error interno del servidor",
      });
    }
  }
  static async getById(req, res) {
    try {
      const { filmId } = req.params;
      const filmById = await TYPE_MODEL.getById(filmId);

      if (!filmById) {
        return res.status(404).json({ message: "Película no encontrada" });
      }
      return res.status(200).json(filmById);
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || "Error al obtener la película",
      });
    }
  }
  static async create(req, res) {
    try {
      const createdFilm = await TYPE_MODEL.create(req.body);
      return res.status(201).json(createdFilm);
    } catch (error) {
      res
        .status(error.status || 500)
        .json({ message: error.message || "Error al crear el nuevo film" });
    }
  }
  static async update(req, res) {
    try {
      const { filmId } = req.params;
      const updatedFilm = await TYPE_MODEL.update(filmId, req.body);
      return res.status(200).json(updatedFilm);
    } catch (error) {
      res
        .status(error.status || 500)
        .json({ message: error.message || `!Error al actualizar la película` });
    }
  }
  static async delete(req, res) {
    try {
      const { filmId } = req.params;
      const deletedFilm = await TYPE_MODEL.delete(filmId);
      return res.status(202).json(deletedFilm);
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || "Error al eliminar la película",
      });
    }
  }
}
