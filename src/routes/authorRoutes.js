import express from "express";

import {
  createNewAuthor,
  getAuthors,
} from "../controllers/authorController.js";
import { checkCreateAuthorParams } from "../middlewares/authorMiddleware.js";

const router = express.Router();

router.get("/", getAuthors);
router.post("/", [checkCreateAuthorParams], createNewAuthor);

export default router;
