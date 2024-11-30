import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "User Route",
  });
});

export default router;
