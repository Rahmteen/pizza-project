import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { createLog } from "../services/logService";
import { AuthRequest } from "../types";

const prisma = new PrismaClient();

/**
 * @name getAllOrdersByUserId
 * @description returns all past orders for a user.
 * @param {AuthRequest} req jwt
 * @param {Response} res
 */

export const getAllOrdersByUserId = async (req: Request, res: Response) => {
  const { user } = req as AuthRequest;
  const userId = user?.id;

  try {
    const orders = await prisma.order.findMany({
      where: { userId },
    });
    await createLog("USER", "A USER has requested all their orders.");
    res.json(orders);
  } catch (error) {
    await createLog("ERROR", "An ERROR occured by fetching an individual users' orders.");
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

/**
 * @name createOrderForUser
 * @description create a new order for a user.
 * @param {AuthRequest} req jwt, body: {cart}
 * @param {Response} res
 */

export const createOrderForUser = async (req: Request, res: Response) => {
  const { user } = req as AuthRequest;
  const userId = user?.id;
  const { cart } = req.body;

  try {
    const newOrder = await prisma.order.create({
      data: {
        userId,
        cart,
      },
    });
    await createLog("USER", "A new ORDER has been placed.");
    res.status(201).json(newOrder);
  } catch (error) {
    await createLog("ERROR", "An ERROR occurred when placing an order.");
    res.status(500).json({ error: "Failed to create order" });
  }
};
