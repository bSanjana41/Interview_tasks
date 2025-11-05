import express from "express";
import cors from "cors";
import { urlencoded } from "express";
import mongoose from "mongoose";
import userRoutes from "./Routes/userRoutes.js";
import { config } from "dotenv";
config();
const app = express();
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(express.json({ limit: "1mb", type: "*/*" }));

app.use("/user", userRoutes);

app.use("/", (req, res) => {
  res.send("Homepage");
});

const PORT = 4000;

const DbConnect = async (req, res) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Database is connected at ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error in connecting database: ${error.message}`);
    console.error("Full error:", error);
  }
};
const connectServer = async () => {
  try {
    await DbConnect();
    app.listen(PORT, () => {
      console.log(`Server is connected :http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`Error in connecting server :${error.message}`);
  }
};
connectServer();
