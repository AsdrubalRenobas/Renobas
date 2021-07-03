/**
 * Importar la aplicación principal
 */
import app from "./app";

//Puerto que inicializara la app, ya lo hicimos en el puerto 4000, en el archivo config.js
app.listen(app.get("port"));
console.log("Server is in port", app.get("port"));
