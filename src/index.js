import dotenv from "dotenv";
import { connectDb } from "./db/index.js";
import { app } from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 8000;

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Derver listening at port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
