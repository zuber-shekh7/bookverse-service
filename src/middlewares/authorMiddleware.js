import { body } from "express-validator";

export const checkCreateAuthorParams = [
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
  body("bio").isString().withMessage("bio must a string").isEmpty(),
];
