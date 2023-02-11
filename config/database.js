import { Sequelize } from "sequelize";
import logger from "../logger/logger.js";
import dbConfig from "./db.config.js";

const db = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

// database call
db.authenticate()
  .then(logger.info("Database Connected successfully"))
  .catch((error) => logger.error("Connection error :", error));

// sync database for development
db.sync({ force: true })
  .then(() => {
    logger.info("Synced db.");
  })
  .catch((error) => {
    logger.error("Failed to Sync db : " + error.message);
  });
export default db;
