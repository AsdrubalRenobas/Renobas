import { Router } from "express";
import { isLoggedIn } from "../lib/auth";
import { renderUserProfile } from "../controllers/user.controller";

const router = Router();
//Validación de perfiles.
router.get("/profile", isLoggedIn, renderUserProfile);

export default router;
