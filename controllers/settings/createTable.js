const { createNewTable } = require("../../models/table");
const { createSuccess } = require("../../utility/message");
const { tableNameCreator } = require("../../utility/tableNameCreator");

const createTable = async (req, res) => {
  try {
    const tbl = req.body.tableName;
    const result = createNewTable(tableNameCreator(tbl));

    console.log("Table Created Successfully");
    res.status(201).json(createSuccess("", result));
  } catch (error) {
    console.error(`Error While Add New Table: ${error}`);
    res.json(err);
  }
};
module.exports = createTable;
