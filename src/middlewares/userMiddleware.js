import { body } from "express-validator";
import jwt from "jsonwebtoken";

import { JWT_SECRET } from "../configs/jwt.js";

export const checkUserLoginParams = [
  body("username")
    .exists()
    .withMessage("username is required field")
    .not()
    .isEmpty()
    .withMessage("username must not be an empty field")
    .isString()
    .withMessage("username must be a string")
    .trim()
    .contains("@bookverse")
    .not()
    .withMessage("invalid username or password"),
  body("password")
    .exists()
    .withMessage("password is require field")
    .not()
    .isEmpty()
    .withMessage("password must not be an empty field")
    .isString()
    .withMessage("password must a string"),
];

export const checkUserRegisterParams = [
  body("firstName")
    .isString()
    .withMessage("firstName must be a string")
    .not()
    .isEmpty()
    .withMessage("firstName must not be an empty field")
    .trim(),
  body("lastName")
    .isString()
    .withMessage("lastName must be a string")
    .not()
    .isEmpty()
    .withMessage("lastName must not be an empty field")
    .trim(),
  body("email")
    .isString()
    .withMessage("email must a string")
    .not()
    .isEmpty()
    .withMessage("email must not be an empty field")
    .isEmail()
    .not()
    .withMessage("invalid email"),
  body("password")
    .isString()
    .withMessage("password must a string")
    .not()
    .isEmpty()
    .withMessage("password must not be an empty field"),
  body("dob")
    .exists()
    .withMessage("dob is required field")
    .not()
    .isEmpty()
    .withMessage("dob must not be an empty field"),
];

export const validateUser = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        message: "unauthorized access",
      });
    }

    const decodecJWT = jwt.decode(authorization, JWT_SECRET);

    if (!decodecJWT) {
      return res.status(401).json({
        message: "unauthorized access",
      });
    }

    req.username = decodecJWT?.username;

    next();
  } catch (error) {
    throw Error(error);
  }
};
