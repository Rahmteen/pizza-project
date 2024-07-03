import { Router } from "express";
import { inviteUser } from "../controllers/adminController";
import { verifyAdmin } from "../middlewares/authMiddleware";

const router = Router();

router.post("/invite", verifyAdmin, inviteUser);

export default router;
