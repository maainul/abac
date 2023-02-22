const { createNewTable } = require("../../models/table");
const { createSuccess } = require("../../utility/message");
const { err } = require("../../utility/err.js");
const { tableNameCreator } = require("../../utility/tableNameCreator");

const createTable = async (req, res) => {
  try {
    const tbl = req.body.tableName;
    const result = await createNewTable(tableNameCreator(tbl));
    if (result === "success") {
      console.log("Table Created Successfully");
      res.status(201).json(createSuccess("", result));
    } else {
      res.json({
        status: "exists",
        message: "Table already exists",
      });
    }
  } catch (error) {
    console.error(`Error While Add New Table: ${error}`);
    res.json(err);
  }
};

module.exports = createTable;
