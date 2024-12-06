import express from "express";

import {
  createNewPublisher,
  deletePublisher,
  getPublishers,
  updatePublisher,
} from "../controllers/publisherController.js";
import {
  checkCreatePublisherParams,
  checkDeletePublisherParams,
  checkUpdatePublisherParams,
} from "../middlewares/publisherMiddleware.js";

const router = express.Router();

router.get("/", getPublishers);
router.post("/", [checkCreatePublisherParams], createNewPublisher);
router.put("/", [checkUpdatePublisherParams], updatePublisher);
router.delete("/", [checkDeletePublisherParams], deletePublisher);

export default router;
