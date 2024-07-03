import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { createLog } from "../services/logService";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

/**
 * @name inviteUser
 * @description handles nodemailer and sending invite links to new users.
 * @param {Request} req body {email}
 * @param {Response} res
 */

export const inviteUser = async (req: Request, res: Response) => {
  const { email } = req.body;

  const token = jwt.sign({ email }, process.env.JWT_SECRET!, { expiresIn: "1d" });
  const invitationLink = `${process.env.CLIENT_URL}/register?token=${token}`;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "You are invited!",
    text: `Click the link to register: ${invitationLink}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    await createLog("ADMIN", "An ADMIN has invited a new user to the platform.");
    res.status(200).json({ message: "Invitation sent" });
  } catch (error) {
    console.log(error);
    await createLog("ERROR", "An ADMIN has encountered an error when inviting a new user to the platform.");
    res.status(500).json({ error: "Failed to send invitation" });
  }
};

/**
 * @name getAllLogs
 * @description returns all platform logs for admin users
 * @param {Request} req
 * @param {Response} res
 */

export const getAllLogs = async (req: Request, res: Response) => {
  try {
    const logs = await prisma.log.findMany();
    await createLog("ADMIN", "An ADMIN requested all logs on the platform");
    res.json(logs);
  } catch (error) {
    await createLog("ERROR", "An ADMIN has encountered an error when getting all logs.");
    res.status(500).json({ error: "Failed to fetch logs" });
  }
};

/**
 * @name getAllOrders
 * @description returns all orders (desc.) for admin users
 * @param {Request} req
 * @param {Response} res
 */

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await prisma.order.findMany({
      orderBy: { createdAt: "desc" },
    });
    await createLog("ADMIN", "An ADMIN requested all orders on the platform");
    res.json(orders);
  } catch (error) {
    await createLog("ERROR", "An ADMIN has encountered an error when getting all orders.");
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};
