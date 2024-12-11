import { validationResult } from "express-validator";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

import { JWT_EXPIRES_IN, JWT_SECRET } from "../configs/jwt.js";
import { UserModel } from "../models/userModel.js";

export const registerUser = async (req, res) => {
  try {
    const { errors } = validationResult(req);

    if (errors.length > 0) {
      return res.status(400).json({
        message: errors[0].msg,
      });
    }

    const { firstName, lastName, email, password, dob } = req.body;

    const isExistingUser = await UserModel.findOne({ email });

    if (isExistingUser) {
      return res.status(400).json({
        message: "Email already taken.",
      });
    }

    const username = `${firstName}${lastName}@bookverse`;

    if (isExistingUser?.username === username) {
      return res.status(400).json({
        message: "username already taken.",
      });
    }

    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    const user = new UserModel({
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword,
      salt,
      dob,
    });

    await user.save();

    return res.status(201).json({
      message: "User created successfully",
      username: user.username,
    });
  } catch (error) {
    throw Error(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { errors } = validationResult(req);

    if (errors.length > 0) {
      return res.status(400).json({
        message: errors[0].msg,
      });
    }

    const { username, password } = req.body;

    const user = await UserModel.findOne({ username });

    if (!user) {
      return res.status(400).json({
        message: "invalid username or password",
      });
    }

    const hashedPassword = bcryptjs.hashSync(password, user.salt);

    const correctPassword = hashedPassword === user.password;

    if (!correctPassword) {
      return res.status(400).json({
        message: "invalid username or password",
      });
    }

    const token = jwt.sign(
      { username: user.username, email: user.email },
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

export const getUser = async (req, res) => {
  try {
    const { username } = req;

    const user = await UserModel.findOne({ username }).select(
      "firstName lastName email dob username -_id"
    );

    if (!user) {
      return res.status(401);
    }

    return res.status(200).json({
      user,
    });
  } catch (error) {
    throw Error(error);
  }
};
