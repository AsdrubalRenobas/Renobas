import { Router } from "express";
import auth from "./auth.routes";
import index from "./index.routes";
import links from "./links.routes";
import user from "./user.routes";
//rutas de autorizaciones y de vistas
const router = Router();

router.use(index);
router.use(auth);
router.use(user);
router.use("/links", links);

export default router;
