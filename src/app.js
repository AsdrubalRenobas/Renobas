import express from "express";
import morgan from "morgan";
import path from "path";
import exphbs from "express-handlebars";
import session from "express-session";
import passport from "passport";
import flash from "connect-flash";
import expressMySQLSession from "express-mysql-session";
import config from "./config";
import routes from "./routes";
import "./lib/passport";

// Inicializaciones Base de datos y puertos
const MySQLStore = expressMySQLSession(session);
const { database, port } = config;
const app = express();



// Ajustes rutas para las vistas
app.set("port", port);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: require("./lib/handlebars"),
  })
);
app.set("view engine", ".hbs");



// Middlewares
//Son funciones cada que un usuario envia una función o se realiza una petición al servidor
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: "henryrenobas",
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database),
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Variables globales, toda la aplicación necesita, en este caso son los mensajes
app.use((req, res, next) => {
  app.locals.message = req.flash("message");
  app.locals.success = req.flash("success");
  app.locals.user = req.user;
  next();
});

// Rutas, que es lo que se va a mostrar al renderizar una url
app.use(routes);

// Archivos Public
app.use(express.static(path.join(__dirname, "public")));

export default app;
