const { Sequelize } = require("sequelize");
const  {db }= require("../config/database.js");
const { DataTypes } = Sequelize;

const defaultProps = {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
};


const User = db.define(
  "users",
  {
    firstname: {
      type: DataTypes.STRING,
    },
    middlename: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    present_address: {
      type: DataTypes.STRING,
    },
    permanent_address: {
      type: DataTypes.STRING,
    },
    nid: {
      type: DataTypes.STRING,
    },
    dob: {
      type: DataTypes.STRING,
    },
    createdBy: {
      type: DataTypes.STRING,
    },
    updatedBy: {
      type: DataTypes.STRING,
    },
  },
    { ...defaultProps }
);

module.exports = User;
