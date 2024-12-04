import express from "express";

import {
  createNewPublisher,
  getPublishers,
} from "../controllers/publisherController.js";
import { checkCreatePublisherParams } from "../middlewares/publisherMiddleware.js";

const router = express.Router();

router.get("/", getPublishers);
router.post("/", [checkCreatePublisherParams], createNewPublisher);

export default router;
