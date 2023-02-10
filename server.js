import express from "express";
import db from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import logger from "./logger/logger.js";

const app = express();
// database call
try {
  await db.authenticate();
  logger.info("Database Connected successfully");
} catch (error) {
  logger.error("Connection error :", error);
}
// sync database for development
db.sync({force:true}).then(()=>{
  logger.info("Synced db.");
})
.catch((error)=>{
  logger.error("Failed to Sync db : "+ error.message);
})

// server call
app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.listen(5000, () => logger.info("Server is running at port 5000"));
