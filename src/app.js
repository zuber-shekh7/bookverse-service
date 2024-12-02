import express from "express";
import "dotenv/config";

import { authorRoutes, bookRoutes, userRoutes } from "./routes/index.js";

const app = express();

app.use(express.json());

app.get("/ping", (req, res) => {
  return res.json({
    message: "Service is Working",
  });
});

app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);
app.use("/users", userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

export default app;
