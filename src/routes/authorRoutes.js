import express from "express";

import {
  createNewAuthor,
  getAuthors,
  updateAuthor,
} from "../controllers/authorController.js";
import {
  checkCreateAuthorParams,
  checkUpdateAuthorParams,
} from "../middlewares/authorMiddleware.js";

const router = express.Router();

router.get("/", getAuthors);
router.post("/", [checkCreateAuthorParams], createNewAuthor);
router.put("/", [checkUpdateAuthorParams], updateAuthor);

export default router;
