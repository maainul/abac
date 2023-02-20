const { Sequelize, DataTypes } = require("sequelize");
const { db } = require("../config/database.js");

const createNewTable = (tbl) => {
  const Table = db.define(tbl, {}, { timestamps: false });
  console.log(`Table info : ${Table}`);
  db.sync()
    .then(() => console.log(`${tbl} Table is Created!`))
    .catch((error) => console.log(`Error creating User table: ${error}`));
};
module.exports = { createNewTable };
