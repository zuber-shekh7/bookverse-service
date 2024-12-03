import { validationResult } from "express-validator";

import { PublisherModel } from "../models/publisherModel.js";

export const getPublishers = async (req, res) => {
  try {
    const publishers = await PublisherModel.find();

    return res.json({
      publishers,
    });
  } catch (error) {
    throw Error(error);
  }
};

export const createNewPublisher = async (req, res) => {
  try {
    const { errors } = validationResult(req);

    if (errors.length > 0) {
      return res.status(400).json({
        message: errors[0].msg,
      });
    }

    const { name, isActive } = req.body;

    await PublisherModel.create({
      name,
      isActive,
    });

    return res.status(201).json({
      message: "Publisher created successfully",
    });
  } catch (error) {
    throw Error(error);
  }
};
