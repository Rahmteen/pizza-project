import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { createLog } from "../services/logService";
import bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";
import { DecodedRegistrationToken } from "../types";

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

/**
 * @name registerUser
 * @description receives user data, validates signup token and created a new user.
 * @param {Request} req body {token, email, firstName, lastName, password}
 * @param {Response} res
 */

export const registerUser = async (req: Request, res: Response) => {
  const { token, email, firstName, lastName, password } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload & DecodedRegistrationToken;
    const decodedEmail = decoded.email;

    if (decodedEmail.toLowerCase() !== email.toLowerCase()) {
      res.status(500).json({ error: "Invalid token or email, failed to register user" });
    }
    if (!email || !firstName || !lastName || !password) {
      res.status(500).json({ error: "Incomplete user data, failed to register user" });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email: decodedEmail,
        password: hashedPassword,
        role: "USER",
        validated: true,
      },
    });
    await createLog("USER", "A new USER has signed up on the platform.");
    const jwtToken = jwt.sign({ userId: newUser.id, role: newUser.role }, process.env.JWT_SECRET!, { expiresIn: "1d" });
    res.status(201).json({ token: jwtToken });
  } catch (error) {
    await createLog("ERROR", "An ERROR occured during signup.");
    res.status(500).json({ error: "Failed to register user" });
  }
};
