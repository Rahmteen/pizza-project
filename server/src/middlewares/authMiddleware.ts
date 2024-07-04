import { PrismaClient } from "@prisma/client";
import { Response, NextFunction, RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { AuthRequest, User } from "../types";

const prisma = new PrismaClient();

/**
 * @name verifyAdmin
 * @description validates token and checks if user is an admin
 * @param {AuthRequest} req jwt
 * @param {Response} res
 * @param {NextFunction} next
 */

export const verifyAdmin: RequestHandler = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload & { role: string };
    (req as AuthRequest).user = decoded as User;

    if ((req as AuthRequest).user.role !== "ADMIN") {
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

export const verifyUser: RequestHandler = async (req, res, next) => {
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

    (req as AuthRequest).user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
