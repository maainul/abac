const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const settingsRoutes = require("./routes/settingsRoutes");
const ck = require("ckey");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

app.use("/users", userRoutes);
app.use("/settings", settingsRoutes);

ck.ENVIORNMENT === "PRODUCTION"
  ? app.listen(ck.port)
  : app.listen(ck.port, () => console.log("Server running on :" + ck.port));
