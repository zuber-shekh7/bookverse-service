import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
    // author: {
    //   type: String,
    //   required: [true, 'Author is required'],
    //   trim: true,
    // },
    publishedDate: {
      type: Date,
      required: [true, "Published date is required"],
    },
    // genres: {
    //   type: [String], // Array of strings
    //   default: [],
    // },
    isbn: {
      type: String,
      unique: true,
      required: [true, "ISBN is required"],
      //   validate: {
      //     validator: function (v) {
      //       return /^[0-9]{10,13}$/.test(v); // Validate ISBN-10 or ISBN-13 format
      //     },
      //     message: (props) => `${props.value} is not a valid ISBN!`,
      //   },
    },
    pages: {
      type: Number,
      min: [1, "Pages must be at least 1"],
      required: [true, "Pages is required"],
    },
    // publisher: {
    //   type: String,
    //   trim: true,
    // },

    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },

    stock: {
      type: Number,
      required: [true, "Stock is required"],
      min: [0, "Stock cannot be less than 0"],
      default: 0,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const BookModel = mongoose.model("Book", bookSchema);
