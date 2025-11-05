import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  otp: { type: String },
  otpExpiry: { type: Date },

},{timestamps:true})

export const userModel = model("User", userSchema)