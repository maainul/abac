const { Sequelize, DataTypes } = require("sequelize");
const { db } = require("../config/database.js");
const queryInterface = db.getQueryInterface();

async function checkIfTableExists(tblName) {
  const tableExists = await queryInterface
    .describeTable(tblName)
    .then(() => true)
    .catch(() => false);
  return tableExists;
}

const createNewTable = async (tbl) => {
  const isTableExists = await checkIfTableExists(tbl);
  if (!isTableExists) {
    queryInterface.createTable(tbl, {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
    await db.sync({ force: true });
    console.log(`${tbl} Table is Created!`);
    return "success";
  } else {
    console.log(`${tbl} Table already exists!`);
    return "failed";
  }
};

module.exports = { createNewTable };
