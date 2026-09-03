import mongoose from "mongoose";
// Schemas
import Type from "../schemas/typeSchema.js";

// SOLO FUNCIONA EL METOD GET ALL
export class TYPE_MODEL {
  static async getAll({ nombre, offset = 0, limit } = {}) {
    const query = {};
    // 1. Filtro por Nombre(este sí es un String directo en Film)
    if (nombre) {
      query.nombre = { $regex: nombre, $options: "i" };
    }
    const numericOffset = Math.max(0, Number(offset));
    const numericLimit = Math.max(1, Number(limit));

    // Ejecutamos la consulta y el conteo total en paralelo para mayor velocidad
    const [allTypes, totalCount] = await Promise.all([
      Type.find(query).skip(numericOffset).limit(numericLimit).lean(),
      Type.countDocuments(query),
    ]);

    return {
      total: totalCount,
      results: allTypes.length,
      offset: numericOffset,
      limit: numericLimit,
      data: allTypes,
    };
  }
  static async getById(typeId) {
    // Validación previa para evitar que BSON falle si el ID no es válido
    if (!mongoose.Types.ObjectId.isValid(typeId)) {
      const error = new Error("El ID proporcionado no es un ObjectId válido");
      error.status = 400;
      throw error;
    }
    // findById acepta directamente el string del ID
    const type = await Type.findById(typeId).lean();

    return type;
  }
  static async create(typeData) {
    // 1. Validar únicamente que el tipo no exista por su título
    const existingType = await Type.findOne({
      nombre: { $regex: new RegExp(`^${typeData.nombre.trim()}$`, "i") },
    });

    if (existingType) {
      const error = new Error(
        "El tipo ya se encuentra registrado en la base de datos.",
      );
      error.statusCode = 400;
      throw error;
    }
    // Creamos el nuevo documento
    const newType = new Type(typeData);
    await newType.save();
    // Retornamos el elemento creado
    return await Type.findById(newType._id).lean();
  }
  static async update(id, type) {
    // 1. Validar que el ID tenga un formato de ObjectId válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error("El ID proporcionado no es un ObjectId válido");
      error.status = 400;
      throw error;
    }
    const updatedType = await Type.findByIdAndUpdate(id, type, {
      returnDocument: "after",
      runValidators: true,
    }).lean();

    return updatedType;
  }
  static async delete(typeId) {
    if (!mongoose.Types.ObjectId.isValid(typeId)) {
      const error = new Error("El ID proporcionado no es un ObjectId válido");
      error.status = 400;
      throw error;
    }

    const deletedType = await Type.findByIdAndDelete(typeId);
    return deletedType;
  }
}
