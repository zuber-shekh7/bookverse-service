import { validationResult } from "express-validator";

import { GenreModel } from "../models/genreModel.js";

export const getGenres = async (req, res) => {
  try {
    const genres = await GenreModel.find();

    return res.json({
      genres,
    });
  } catch (error) {
    throw Error(error);
  }
};

export const createNewGenre = async (req, res) => {
  try {
    const { errors } = validationResult(req);

    if (errors.length > 0) {
      return res.status(400).json({
        message: errors[0].msg,
      });
    }

    const { title, description } = req.body;

    await GenreModel.create({
      title,
      description,
    });

    return res.status(201).json({
      message: "Genre created successfully",
    });
  } catch (error) {
    throw Error(error);
  }
};
