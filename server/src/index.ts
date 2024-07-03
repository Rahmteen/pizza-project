import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

// routes
import authRoutes from "./routes/authRoutes";
import adminRoutes from "./routes/adminRoutes";
import userRoutes from './routes/userRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use('/user', userRoutes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
