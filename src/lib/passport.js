import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

import pool from "../database";
import * as helpers from "./helpers";

passport.use(
  "local.signup",
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'pass',
      passReqToCallback: true,
    },
    async (req, username, pass, done) => {
      const rows = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
      if (rows.length > 0) {
        const user = rows[0];
        return done(null, false, req.flash('message', 'El usuario ya existe, Intenta con otro'));
      }
      const { email } = req.body;
      let newUser = {
        username,
        pass,
        email
      };
      newUser.pass = await helpers.encryptPassword(pass);
      // Guardando en la base de datos
      const result = await pool.query("INSERT INTO users SET ? ", newUser);
      newUser.id = result.insertId;
      return done(null, newUser);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const rows = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
  done(null, rows[0]);
});

passport.use('local.signin', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'pass',
  passReqToCallback: true
}, async (req, username, pass, done) => {
  const rows = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
  if (rows.length > 0) {
    const user = rows[0];
    const validPass = await helpers.matchPassword(pass, user.pass);
    if (validPass) {
      done(null, user, req.flash('success', 'Haces parte de la cultura Renobas'));
    } else {
      done(null, false, req.flash('message', 'Clave Incorrecta'));
    }
  } else {
    return done(null, false, req.flash('message', 'El usuario no existe'));
  }
}));

