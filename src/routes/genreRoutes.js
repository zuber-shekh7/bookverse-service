import express from "express";

import { createNewGenre, getGenres } from "../controllers/genreController.js";
import { checkCreateGenreParams } from "../middlewares/genreMiddleware.js";

const router = express.Router();

router.get("/", getGenres);
router.post("/", [checkCreateGenreParams], createNewGenre);

export default router;
