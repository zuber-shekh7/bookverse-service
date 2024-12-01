import { validationResult } from "express-validator";

import { BookModel } from "../models/bookModel.js";

export const getBooks = async (req, res) => {
  try {
    const books = await BookModel.find();

    return res.json({
      books,
    });
  } catch (error) {
    throw Error(error);
  }
};

export const createNewBook = async (req, res) => {
  try {
    const { errors } = validationResult(req);

    if (errors.length > 0) {
      return res.status(400).json({
        message: errors[0].msg,
      });
    }

    const { title, description, publishedDate, stock, pages, isbn, price } =
      req.body;

    await BookModel.create({
      title,
      description,
      publishedDate,
      stock,
      pages,
      isbn,
      price,
    });

    return res.status(201).json({
      message: "Book created successfully",
    });
  } catch (error) {
    throw Error(error);
  }
};
