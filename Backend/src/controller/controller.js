import { MODEL } from "../model/model.js";

export class CONTROLLER {
  static async getAll(req, res) {
    // const { categoría, titulo, genero, director, tipo, offset = 0 } = req.query;
    const movies = await MODEL.getAll(req.query);

    return res.status(200).json(movies);
  }
}
