import { Request, Response } from "express";
import { createLog } from "../services/logService";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

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
