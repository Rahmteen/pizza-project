import { Router } from 'express';
import { handleChatbotMessage } from '../controllers/chatbotController';
import { verifyUser } from '../middlewares/authMiddleware';

const router = Router();

router.post('/message', verifyUser, handleChatbotMessage);

export default router;
