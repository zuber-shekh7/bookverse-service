import { body } from "express-validator";

export const checkCreateBookParam = [
  body("title")
    .isString()
    .withMessage("title must be a string")
    .not()
    .isEmpty()
    .withMessage("title must not be an empty field")
    .trim(),
  body("description")
    .isString()
    .withMessage("description must be a string")
    .not()
    .isEmpty()
    .withMessage("description must not be an empty field")
    .trim(),
  body("publishedDate")
    .isString()
    .withMessage("publishedDate must a date string")
    .not()
    .isEmpty()
    .withMessage("publishedDate must not be an empty field"),
  body("price")
    .isNumeric()
    .withMessage("price must a number")
    .not()
    .isEmpty()
    .withMessage("price must not be an empty field"),
  body("pages")
    .isNumeric()
    .withMessage("pages must a number")
    .not()
    .isEmpty()
    .withMessage("pages must not be an empty field"),
  body("stock")
    .isNumeric()
    .withMessage("pages must a number")
    .not()
    .isEmpty()
    .withMessage("pages must not be an empty field"),
  body("isbn")
    .isString()
    .withMessage("isbn must be a string")
    .not()
    .isEmpty()
    .withMessage("isbn must not be an empty field")
    .trim(),
];
