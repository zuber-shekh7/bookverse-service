import { validationResult } from "express-validator";

import { AuthorModel } from "../models/authorModel.js";

export const getAuthors = async (req, res) => {
  try {
    const authors = await AuthorModel.find();

    return res.json({
      authors,
    });
  } catch (error) {
    throw Error(error);
  }
};

export const createNewAuthor = async (req, res) => {
  try {
    const { errors } = validationResult(req);

    if (errors.length > 0) {
      return res.status(400).json({
        message: errors[0].msg,
      });
    }

    const { firstName, lastName, bio } = req.body;

    return res.status(201).json({
      message: "Author created successfully",
    });
  } catch (error) {
    throw Error(error);
  }
};

export const updateAuthor = async (req, res) => {
  try {
    const { errors } = validationResult(req);

    if (errors.length > 0) {
      return res.status(400).json({
        message: errors[0].msg,
      });
    }

    const { id, firstName, lastName, bio } = req.body;

    const author = await AuthorModel.findById(id);

    if (!author) {
      return res.status(400).json({
        message: "invalid id",
      });
    }

    author.firstName = firstName;
    author.lastName = lastName;
    author.bio = bio;

    await author.save();

    return res.status(200).json({
      message: "Updated author successfully",
    });
  } catch (error) {
    throw Error(error);
  }
};
