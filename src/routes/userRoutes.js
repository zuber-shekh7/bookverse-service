import express from "express";

import {
  getUser,
  loginUser,
  registerUser,
} from "../controllers/userController.js";
import {
  checkUserLoginParams,
  checkUserRegisterParams,
  validateUser,
} from "../middlewares/userMiddleware.js";

const router = express.Router();

router.post("", [validateUser], getUser);
router.post("/login", [checkUserLoginParams], loginUser);
router.post("/register", [checkUserRegisterParams], registerUser);

export default router;
