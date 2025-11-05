import { Router } from "express";
import { User } from "../Model/Schema.js";

const router = Router();
router.post("/signup", async (req, res) => {
  try {
    const { name, emailId } = req.body;
    if (!name || !emailId) {
      return res.send("Both fields are required");
    }
    const user = new User({ name, emailId });

    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(400).json({
      mesage: "unable to create user",
      error: error.message,
    });
  }
});

export default router;
