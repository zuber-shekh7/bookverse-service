import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "firstName is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "lastName is required"],
      trim: true,
    },
    username: {
      type: String,
      require: [true, "username is required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    salt: {
      type: String,
      required: [true, "salt is required"],
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const AdminModel = mongoose.model("Admin", adminSchema);
