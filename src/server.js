import app from "./app.js";

import { PORT } from "./configs/config.js";

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running at port : ${PORT}`);
});
