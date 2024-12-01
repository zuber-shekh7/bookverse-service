import express from "express";

import { createNewBook, getBooks } from "../controllers/bookController.js";
import { checkCreateBookParam } from "../middlewares/bookMiddleware.js";

const router = express.Router();

router.get("/", getBooks);
router.post("/", [checkCreateBookParam], createNewBook);

export default router;
