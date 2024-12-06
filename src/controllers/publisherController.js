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

export const updatePublisher = async (req, res) => {
  try {
    const { errors } = validationResult(req);

    if (errors.length > 0) {
      return res.status(400).json({
        message: errors[0].msg,
      });
    }

    const { id, name, isActive } = req.body;

    const publisher = await PublisherModel.findById(id);

    if (!publisher) {
      return res.status(400).json({
        message: "invalid id",
      });
    }

    publisher.name = name;
    publisher.isActive = isActive;

    await publisher.save();

    return res.status(200).json({
      message: "Publisher updated successfully",
    });
  } catch (error) {
    throw Error(error);
  }
};

export const deletePublisher = async (req, res) => {
  try {
    const { errors } = validationResult(req);

    if (errors.length > 0) {
      return res.status(400).json({
        message: errors[0].msg,
      });
    }

    const { id } = req.body;

    const deletedPublisher = await PublisherModel.findByIdAndDelete(id);

    if (deletedPublisher) {
      return res.status(200).json({
        message: "Publisher deleted successfully",
      });
    } else {
      return res.status(400).json({
        message: "invalid id",
      });
    }
  } catch (error) {
    throw Error(error);
  }
};
