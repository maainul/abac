import express from "express";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import logger from "./logger/logger.js";

const app = express();

// server call
app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.listen(5000, () => logger.info("Server is running at port 5000"));
