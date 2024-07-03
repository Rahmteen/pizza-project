import { PrismaClient } from "@prisma/client";
import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthRequest } from "../types";

const prisma = new PrismaClient();

/**
 * @name verifyAdmin
 * @description validates token and checks if user is an admin
 * @param {AuthRequest} req jwt
 * @param {Response} res
 * @param {NextFunction} next
 */

export const verifyAdmin = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded;

    if (req.user.role !== "ADMIN") {
      return res.status(403).json({ error: "Access denied" });
    }

    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

/**
 * @name verifyUser
 * @description returns user data for valid decoded jwt tokens.
 * @param {AuthRequest} req jwt
 * @param {Response} res
 * @param {NextFunction} next
 */

export const verifyUser = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
