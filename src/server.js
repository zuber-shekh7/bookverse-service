import app from "./app.js";

import { PORT } from "./configs/config.js";
import { connectToDatabase } from "./utils/database.js";

(async () => {
  try {
    await connectToDatabase();

    app.listen(PORT, (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Server is running at port : ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1);
  }
})();
