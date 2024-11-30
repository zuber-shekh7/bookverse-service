import express from "express";
import "dotenv/config";

import { PORT } from "./constants/config.js";

const app = express();

app.get("/ping", (req, res) => {
  return res.json({
    message: "Service is Working",
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running at port : ${PORT}`);
});
