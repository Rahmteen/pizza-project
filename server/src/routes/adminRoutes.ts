import { Router } from "express";
import { inviteUser, getAllLogs, getAllOrders } from "../controllers/adminController";
import { verifyAdmin } from "../middlewares/authMiddleware";

const router = Router();

router.post("/invite", verifyAdmin, inviteUser);
router.get("/logs", verifyAdmin, getAllLogs);
router.get("/orders", verifyAdmin, getAllOrders);

export default router;
