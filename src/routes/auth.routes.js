import { Router } from "express";
const router = Router();

import {
  renderSignUp,
  signUp,
  renderSignIn,
  signIn,
  logout,
} from "../controllers/auth.controller";

// Registro
router.get("/signup", renderSignUp);
router.post("/signup", signUp);

// Inicio de Sesion
router.get("/signin", renderSignIn);
router.post("/signin", signIn);

//Salir
router.get("/logout", logout);

export default router;
