import { Sequelize } from "sequelize";
import dbConfig from "./db.config.js";
const db = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool:{
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});
export default db;