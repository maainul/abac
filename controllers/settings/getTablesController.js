const { createSuccess } = require("../../utility/message");
const { err } = require("../../utility/err.js");
const { getTablesModel } = require("../../models/getTablesModel");

const getTablesController = async (req, res) => {
  try {
    const tables = await getTablesModel();
    if (tables.length > 0) {
      console.log("All table names fetched successfully");
      res
        .status(200)
        .json(createSuccess("Table list fetched successfully", { tables }));
    } else {
      res.status(404).json({
        status: "not found",
        message: "No tables found",
      });
    }
  } catch (error) {
    console.error(`Error While Fetch Tables: ${error}`);
    res.status(500).json(err);
  }
};

module.exports = getTablesController;
