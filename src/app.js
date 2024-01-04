import express from "express";

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//posts routes
import postRoutes from "./routes/post.route.js";
app.use("/api/v1/posts", postRoutes);

//error middleware
import { errorHandlerMiddleware } from "./middlewares/customError.middleware.js";
app.use(errorHandlerMiddleware);

export { app };
