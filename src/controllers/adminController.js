import { validationResult } from "express-validator";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

import { AdminModel } from "../models/adminModel.js";
import { JWT_EXPIRES_IN, JWT_SECRET } from "../configs/jwt.js";

export const loginAdmin = async (req, res) => {
  try {
    const { errors } = validationResult(req);

    if (errors.length > 0) {
      return res.status(400).json({
        message: errors[0].msg,
      });
    }

    const { username, password } = req.body;

    const admin = await AdminModel.findOne({ username });

    if (!admin) {
      return res.status(400).json({
        message: "invalid username or password",
      });
    }

    const hashedPassword = bcryptjs.hashSync(password, admin.salt);

    const correctPassword = hashedPassword === admin.password;

    if (!correctPassword) {
      return res.status(400).json({
        message: "invalid username or password",
      });
    }

    const token = jwt.sign(
      { username: admin.username, email: admin.email },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    return res.status(200).json({
      message: "Loggedin Successfully",
      token,
    });
  } catch (error) {
    throw Error(error);
  }
};

export const registerAdmin = async (req, res) => {
  try {
    const { errors } = validationResult(req);

    if (errors.length > 0) {
      return res.status(400).json({
        message: errors[0].msg,
      });
    }

    const { firstName, lastName, email, password } = req.body;

    const isExistingAdmin = await AdminModel.findOne({ email });

    if (isExistingAdmin) {
      return res.status(400).json({
        message: "Email already taken.",
      });
    }

    const username = `${firstName}${lastName}@admin`;

    if (isExistingAdmin?.username === username) {
      return res.status(400).json({
        message: "username already taken.",
      });
    }

    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    const admin = new AdminModel({
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword,
      salt,
    });

    await admin.save();

    return res.status(201).json({
      message: "Admin created successfully",
      username: admin.username,
    });
  } catch (error) {
    throw Error(error);
  }
};

export const getAdmin = async (req, res) => {
  try {
    const { username } = req;

    const admin = await AdminModel.findOne({ username }).select(
      "firstName lastName email username -_id"
    );

    if (!admin) {
      return res.status(401);
    }

    return res.status(200).json({
      admin,
    });
  } catch (error) {
    throw Error(error);
  }
};
