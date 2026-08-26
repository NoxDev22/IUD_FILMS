import { DIRECTOR_MODEL } from "../model/directorModel.js";

// SOLO FUNCIONA EL METOD GET ALL
export class DIRECTOR_CONTROLLER {
  static async getAll(req, res) {
    try {
      const directors = await DIRECTOR_MODEL.getAll(req.query);
      if (!directors) {
        return res
          .status(404)
          .json({ message: "No hay resultados en su busqueda" });
      }
      return res.status(200).json(directors);
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
      const { directorId } = req.params;

      const directorById = await DIRECTOR_MODEL.getById(directorId);

      if (!directorById) {
        return res.status(404).json({ message: "Película no encontrada" });
      }
      return res.status(200).json(directorById);
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || "Error al obtener la película",
      });
    }
  }
  static async create(req, res) {
    try {
      const createdDirector = await DIRECTOR_MODEL.create(req.body);
      return res.status(201).json(createdDirector);
    } catch (error) {
      res
        .status(error.status || 500)
        .json({ message: error.message || "Error al crear el nuevo film" });
    }
  }
  static async update(req, res) {
    try {
      const { directorId } = req.params;
      const updatedDirector = await DIRECTOR_MODEL.update(directorId, req.body);
      return res.status(200).json(updatedDirector);
    } catch (error) {
      res
        .status(error.status || 500)
        .json({ message: error.message || `!Error al actualizar la película` });
    }
  }
  static async delete(req, res) {
    try {
      const { directorId } = req.params;
      const deletedDirector = await DIRECTOR_MODEL.delete(directorId);
      return res.status(202).json(deletedDirector);
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || "Error al eliminar la película",
      });
    }
  }
}
