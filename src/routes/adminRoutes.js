import express from "express";

import {
  checkAdminRegisterParams,
  checkLoginRegisterParams,
  validateAdmin,
} from "../middlewares/adminMiddleware.js";
import {
  getAdmin,
  loginAdmin,
  registerAdmin,
} from "../controllers/adminController.js";

const router = express.Router();

router.post("", [validateAdmin], getAdmin);
router.post("/login", [checkLoginRegisterParams], loginAdmin);
router.post("/register", [checkAdminRegisterParams], registerAdmin);

export default router;
