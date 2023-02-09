import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

  const User = db.define("users", {
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
  },{
    freezeTableName:true
  });

  export default User;