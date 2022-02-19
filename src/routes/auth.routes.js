import { Router } from "express";
const router = Router();

import {
  renderSignUp,
  signUp,
  renderSignIn,
  signIn,
  logout,
  renderChange,
  ChangePass,
} from "../controllers/auth.controller";

// Registro
router.get("/signup", renderSignUp);
router.post("/signup", signUp);

// Inicio de Sesion
router.get("/signin", renderSignIn);
router.post("/signin", signIn);

// CHANGE
router.get("/change", renderChange);
router.post("/change", ChangePass);

router.get("/recover", renderRecover);
router.post("/recover", recoPass);

//Salir
router.get("/logout", logout);

export default router;
