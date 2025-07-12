import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import  { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT;



app.use(
  cors({
    origin: "http://localhost:5001",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    console.log("server is running on PORT:" + PORT);
    connectDB();
})