import "dotenv/config";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";

//?appName=iudfilms
class dbClient {
  constructor() {
    this.DbConnect();
  }
  async DbConnect() {
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/iudFilms`;
    await mongoose.connect(queryString);
    console.log("Conexión exitosa");
  }
  async closeConnect() {
    try {
      await mongoose.disconnect();
      console.log("conexión a la base de datos cerrada");
    } catch (e) {
      console.log("Error al cerrar la conexión " + e);
    }
  }
}

export default new dbClient();
