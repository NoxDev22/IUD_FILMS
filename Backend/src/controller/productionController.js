import { PRODUCTION_MODEL } from "../model/productionModel.js";

// SOLO FUNCIONA EL METOD GET ALL
export class PRODUCTION_CONTROLLER {
  static async getAll(req, res) {
    try {
      const productions = await PRODUCTION_MODEL.getAll(req.query);
      if (!productions) {
        return res
          .status(404)
          .json({ message: "No hay resultados en su búsqueda" });
      }
      return res.status(200).json(productions);
    } catch (error) {
      // Imprime el error completo en la consola de la terminal
      console.error("Error en getProductions:", error);
      // Devuelve un JSON con el mensaje real del error
      return res.status(500).json({
        message: error.message || "Error interno del servidor",
      });
    }
  }
  static async getById(req, res) {
    try {
      const { productionId } = req.params;
      const productionById = await PRODUCTION_MODEL.getById(productionId);

      if (!productionById) {
        return res.status(404).json({ message: "Productora no encontrada" });
      }
      return res.status(200).json(productionById);
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || "Error al obtener la productora",
      });
    }
  }
  static async create(req, res) {
    try {
      const createdProduction = await PRODUCTION_MODEL.create(req.body);
      return res.status(201).json(createdProduction);
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message || "Error al crear la nueva productora",
      });
    }
  }
  static async update(req, res) {
    try {
      const { productionId } = req.params;
      const updatedProduction = await PRODUCTION_MODEL.update(
        productionId,
        req.body,
      );
      return res.status(200).json(updatedProduction);
    } catch (error) {
      res.status(error.status || 500).json({
        message: error.message || `!Error al actualizar la productora`,
      });
    }
  }
  static async delete(req, res) {
    try {
      const { productionId } = req.params;
      const deletedProduction = await PRODUCTION_MODEL.delete(productionId);
      return res.status(202).json(deletedProduction);
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || "Error al eliminar la productora",
      });
    }
  }
}
