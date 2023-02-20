const express = require("express");
const createTable = require("../controllers/settings/createTable");

const router = express.Router();

router.post("/table/create", createTable);

module.exports = router;
