import { body } from "express-validator";

export const checkCreateGenreParams = [
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
    .trim()
    .isEmpty(),
];

export const checkUpdateGenreParams = [
  body("id").isMongoId().not().withMessage("invalid id"),
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
    .trim()
    .not()
    .isEmpty()
    .withMessage("description must not be an empty field"),
];
