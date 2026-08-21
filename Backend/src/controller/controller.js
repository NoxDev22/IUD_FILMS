import { MODEL } from "../model/model.js";

export class CONTROLLER {
  static async getAll(req, res) {
    // const { categoría, titulo, genero, director, tipo, offset = 0 } = req.query;
    try {
      const movies = await MODEL.getAll(req.query);
      console.log(movies);
      return res.status(200).json(movies);
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
    const { filmId } = req.params;
    const filmById = await MODEL.getById(filmId);
    return res.status(200).json(filmById);
  }

  static async create(req, res) {
    try {
      const response = await MODEL.create(req.body);
      return res.status(201).json(response);
    } catch (e) {
      res.status(500).send({ error: e });
    }
  }
  static async update(req, res) {
    try {
      const { filmId } = req.params;
      const response = await MODEL.update(filmId, req.body);
      return res.status(200).json({ status: "update-ok" });
    } catch (e) {
      res.status(500).send({ error: `!Error ${e}` });
    }
  }
  static async delete(req, res) {
    try {
      const { filmId } = req.params;
      const response = await MODEL.delete(filmId);
      return res.status(202).json(response);
    } catch (e) {
      res.status(500).send({ error: e });
    }
  }
}
