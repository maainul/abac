const { Sequelize, DataTypes } = require("sequelize");
const { db } = require("../config/database.js");
const queryInterface = db.getQueryInterface();

const getTablesModel = async () => {
  const [results, metadata] = await db.query(`
    SELECT table_name FROM information_schema.tables 
    WHERE table_schema='abac' AND table_type='BASE TABLE'
  `);
  const tables = results.map((result) => {
    return { name: result.TABLE_NAME };
  });
  return tables;
};

module.exports = { getTablesModel };
