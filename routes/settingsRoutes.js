const express = require("express");
const createTable = require("../controllers/settings/createTable");
const getTablesController = require("../controllers/settings/getTablesController");

const router = express.Router();

router.post("/table/create", createTable);
router.get("/tables", getTablesController);

module.exports = router;
