import mongoose from "mongoose";

const publisherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Publisher name is required"],
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const PublisherModel = mongoose.model("Publisher", publisherSchema);
