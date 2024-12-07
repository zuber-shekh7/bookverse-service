import { body } from "express-validator";
import jwt from "jsonwebtoken";

import { JWT_SECRET } from "../configs/jwt.js";

export const checkLoginRegisterParams = [
  body("username")
    .isString()
    .withMessage("username must be a string")
    .not()
    .isEmpty()
    .withMessage("username must not be an empty field")
    .trim()
    .contains("@admin")
    .not()
    .withMessage("invalid username"),
  body("password")
    .isString()
    .withMessage("password must a string")
    .not()
    .isEmpty()
    .withMessage("password must not be an empty field"),
];

export const checkAdminRegisterParams = [
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
];

export const validateAdmin = async (req, res, next) => {
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
