import { TYPE_MODEL } from "../model/typeModel.js";

export class TYPE_CONTROLLER {
  static async getAll(req, res) {
    try {
      const types = await TYPE_MODEL.getAll(req.query);
      if (!types) {
        return res
          .status(404)
          .json({ message: "No hay resultados en su búsqueda" });
      }
      return res.status(200).json(types);
    } catch (error) {
      // Imprime el error completo en la consola de la terminal
      console.error("Error en getTypes:", error);
      // Devuelve un JSON con el mensaje real del error
      return res.status(500).json({
        message: error.message || "Error interno del servidor",
      });
    }
  }
  static async getById(req, res) {
    try {
      const { typeId } = req.params;
      const typeById = await TYPE_MODEL.getById(typeId);

      if (!typeById) {
        return res.status(404).json({ message: "Película no encontrada" });
      }
      return res.status(200).json(typeById);
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || "Error al obtener la película",
      });
    }
  }
  static async create(req, res) {
    try {
      const createdType = await TYPE_MODEL.create(req.body);
      return res.status(201).json(createdType);
    } catch (error) {
      res
        .status(error.status || 500)
        .json({ message: error.message || "Error al crear el nuevo tipo" });
    }
  }
  static async update(req, res) {
    try {
      const { typeId } = req.params;
      const updatedType = await TYPE_MODEL.update(typeId, req.body);
      return res.status(200).json(updatedType);
    } catch (error) {
      res
        .status(error.status || 500)
        .json({ message: error.message || `!Error al actualizar el tipo` });
    }
  }
  static async delete(req, res) {
    try {
      const { typeId } = req.params;
      const deletedType = await TYPE_MODEL.delete(typeId);
      return res.status(202).json(deletedType);
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || "Error al eliminar el tipo",
      });
    }
  }
}
