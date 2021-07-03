import { Router } from "express";
import { isLoggedIn } from "../lib/auth";
import {
  renderAddLink,
  addLink,
  renderLinks,
  deleteLink,
  editLink,
  renderEditLink,
} from "../controllers/links.controller";

const router = Router();
// Autorización
router.use(isLoggedIn);

// Rutas de las recolectas
router.get("/add", renderAddLink);
router.post("/add", addLink);
router.get("/", isLoggedIn, renderLinks);
router.get("/delete/:id", deleteLink);
router.get("/edit/:id", renderEditLink);
router.post("/edit/:id", editLink);

export default router;
