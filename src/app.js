import express from "express";
import morgan from "morgan";
import "dotenv/config";

import {
  authorRoutes,
  bookRoutes,
  genreRoutes,
  publisherRoutes,
  userRoutes,
} from "./routes/index.js";

const app = express();

// logger
app.use(morgan("tiny"));

app.use(express.json());

app.get("/ping", (req, res) => {
  return res.json({
    message: "Service is Working",
  });
});

app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);
app.use("/genres", genreRoutes);
app.use("/publishers", publisherRoutes);
app.use("/users", userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

export default app;
