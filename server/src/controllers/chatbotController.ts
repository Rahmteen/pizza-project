import { Request, Response } from "express";
import { getChatbotResponse } from "../services/chatbotService";
import { AuthRequest } from "../types";

const steps = [
  "What size pizza do you want? Small, medium, or large?",
  "Do you want any sauce or cheese on the pizza?",
  "Do you want any veggies on the pizza? The options include mushrooms, onions, olives, pineapple.",
  "Do you want to add any meat to the pizza? The options include pepperoni, sausage, bacon.",
  "If everything looks good, we can place your order. Confirm?",
];

export const handleChatbotMessage = async (req: Request, res: Response) => {
  const { user } = req as AuthRequest;
  const userId = user?.id;
  const { message } = req.body;

  

  return res.status(500).json({ error: "Failed to process message" });
};
