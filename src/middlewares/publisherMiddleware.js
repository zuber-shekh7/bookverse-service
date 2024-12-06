import { body } from "express-validator";

export const checkCreatePublisherParams = [
  body("name")
    .isString()
    .withMessage("publisher name must be a string")
    .not()
    .isEmpty()
    .withMessage("publisher name must not be an empty field")
    .trim(),
  body("isActive").isBoolean().withMessage("isActive must be a boolean"),
];

export const checkUpdatePublisherParams = [
  body("id").isMongoId().not().withMessage("invalid id"),
  body("name")
    .isString()
    .withMessage("publisher name must be a string")
    .not()
    .isEmpty()
    .withMessage("publisher name must not be an empty field")
    .trim(),
  body("isActive").isBoolean().withMessage("isActive must be a boolean"),
];

export const checkDeletePublisherParams = [
  body("id").isMongoId().not().withMessage("invalid id"),
];
