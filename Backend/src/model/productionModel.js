import mongoose from "mongoose";
// Schemas
import Production from "../schemas/productionSchema.js";

// SOLO FUNCIONA EL METOD GET ALL
export class PRODUCTION_MODEL {
  static async getAll({ nombre, estado, offset = 0, limit } = {}) {
    const query = {};
    // 1. Filtro por Nombre(este sí es un String directo en Film)
    if (nombre) {
      query.nombre = { $regex: nombre, $options: "i" };
    }
    // 2. Filtro por Estado (por nombre o parcial)
    if (estado) {
      query.estado = { $regex: estado, $options: "i" };
    }

    const numericOffset = Math.max(0, Number(offset));
    const numericLimit = Math.max(1, Number(limit));

    // Ejecutamos la consulta y el conteo total en paralelo para mayor velocidad
    const [allProductions, totalCount] = await Promise.all([
      Production.find(query).skip(numericOffset).limit(numericLimit).lean(),
      Production.countDocuments(query),
    ]);

    return {
      total: totalCount,
      results: allProductions.length,
      offset: numericOffset,
      limit: numericLimit,
      data: allProductions,
    };
  }
  static async getById(productionId) {
    // Validación previa para evitar que BSON falle si el ID no es válido
    if (!mongoose.Types.ObjectId.isValid(productionId)) {
      const error = new Error("El ID proporcionado no es un ObjectId válido");
      error.status = 400;
      throw error;
    }

    // findById acepta directamente el string del ID
    const production = await Production.findById(productionId).lean();

    return production;
  }
  static async create(productionData) {
    // 1. Validar únicamente que el tipo no exista por su título
    const existingProduction = await Production.findOne({
      nombre: {
        $regex: new RegExp(`^${productionData.nombre.trim()}$`, "i"),
      },
    });

    if (existingProduction) {
      const error = new Error(
        "La productora ya se encuentra registrado en la base de datos.",
      );
      error.statusCode = 400;
      throw error;
    }
    // Creamos el nuevo documento
    const newProduction = new Production(productionData);
    await newProduction.save();
    // Retornamos el elemento creado populando sus referencias
    return await Production.findById(newProduction._id).lean();
  }
  static async update(id, production) {
    // 1. Validar que el ID tenga un formato de ObjectId válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error("El ID proporcionado no es un ObjectId válido");
      error.status = 400;
      throw error;
    }
    const updatedProduction = await Production.findByIdAndUpdate(
      id,
      production,
      {
        returnDocument: "after",
        runValidators: true,
      },
    ).lean();

    return updatedProduction;
  }
  static async delete(productionId) {
    if (!mongoose.Types.ObjectId.isValid(productionId)) {
      const error = new Error("El ID proporcionado no es un ObjectId válido");
      error.status = 400;
      throw error;
    }

    const deletedProduction = await Production.findByIdAndDelete(productionId);
    return deletedProduction;
  }
}
