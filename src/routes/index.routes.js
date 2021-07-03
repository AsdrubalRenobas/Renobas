import { Router } from "express";
const router = Router();
//Controladores de las vistas.
import { renderIndex } from "../controllers/index.conroller";

router.get("/", renderIndex);

export default router;
