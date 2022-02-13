/**
 * Lectura de variables de entorno
 */
import { config } from "dotenv";
config();
//Configuración de base de datos
export default {
  database: {
    connectionLimit: 1000,
    host: process.env.DATABASE_HOST || "localhost",
    user: process.env.DATABASE_USER || "root",
    password: process.env.DATABASE_PASSWORD || "",
    database: process.env.DATABASE_NAME || "dblinks",
  },
  //Puerto en donde se inicializara
  port: process.env.PORT || 3306,
};
