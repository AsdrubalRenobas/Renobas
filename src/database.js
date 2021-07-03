import mysql from "mysql";
import { promisify } from "util";
import config from "./config";

//Llamo la configuración de la base de datos.
const { database } = config;

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Base de datos fue cerrada");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Base de datos tiene demasiadas conexiones");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Base de datos fue rechazada");
    }
  }

  if (connection) connection.release();
  console.log("Base de datos esta conectada");

  return;
});

// Promisify Pool Querys
pool.query = promisify(pool.query);

export default pool;
