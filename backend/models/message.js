import mongoose, { mongo } from "mongoose";
import validator from "validator";

const messageScheam = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, "Name must contain at least 3 characters!"],
    maxLength: [30, "Name cannot exceed 30 characters!"],
  },
  email: {
    type: String,
    required: true,
    validade: [validator.isEmail, "Provide a valid email!"]
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, "Phone must contain at exact 11 digits!"],
    maxLength: [11, "Phone must contain at exact 11 digits!"],
  },
  name: {
    type: String,
    required: true,
  },
});

export const Volunteer = mongoose.model("Volunteer", messageScheam);
