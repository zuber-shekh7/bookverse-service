import express from "express";

import {
  createNewGenre,
  getGenres,
  updateGenre,
} from "../controllers/genreController.js";
import {
  checkCreateGenreParams,
  checkUpdateGenreParams,
} from "../middlewares/genreMiddleware.js";

const router = express.Router();

router.get("/", getGenres);
router.post("/", [checkCreateGenreParams], createNewGenre);
router.put("/", [checkUpdateGenreParams], updateGenre);
export default router;
