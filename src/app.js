import express from "express";
import userRouter from "./routes/userRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(userRouter);

export { app };
