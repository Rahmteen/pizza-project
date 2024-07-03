import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { createLog } from "../services/logService";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

/**
 * @name loginUser
 * @description queries user and descrypts/validates password for user login.
 * @param {Request} req body {email, password}
 * @param {Response} res
 */

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET!, { expiresIn: "1d" });
    await createLog("USER", "An existing USER has logged in to their account.");
    res.json({ token, isAdmin: user?.role === "ADMIN" });
  } catch (error) {
    await createLog("ERROR", "An ERROR occured during login.");
    res.status(500).json({ error: "Failed to login user" });
  }
};
