import { Router } from "express";
import { getAllOrdersByUserId, createOrderForUser } from "../controllers/userController";
import { verifyUser } from "../middlewares/authMiddleware";

const router = Router();

router.get("/orders", verifyUser, getAllOrdersByUserId);
router.post("/order", verifyUser, createOrderForUser);

export default router;
