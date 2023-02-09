import express from "express";
import db from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

const app = express();
// database call
try {
  await db.authenticate();
  console.log("Database Connected successfully");
} catch (error) {
  console.log("Connection error :", error);
}
// sync database for development
db.sync().then(()=>{
  console.log("Synced db.");
})
.catch((error)=>{
  console.log("Failed to Sync db : "+ error.message);
})

// server call
app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.listen(5000, () => console.log("Server is running at port 5000"));
