import mongoose from "mongoose";

const genreSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, "description cannot exceed 500 characters"],
    },
  },
  {
    timestamps: true,
  }
);

export const GenreModel = mongoose.model("Genre", genreSchema);
