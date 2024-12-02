import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
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
    bio: {
      type: String,
      trim: true,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
  },
  {
    timestamps: true,
  }
);

export const AuthorModel = mongoose.model("Author", authorSchema);
