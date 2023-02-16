const { Sequelize }  = require("sequelize");
const ck = require('ckey');
const db = new Sequelize(ck.DB, ck.DB_USER, ck.DB_PASSWORD, {
  host: ck.ENVIORNMENT === 'PRODUCTION' ? ck.DB_HOST_15 : 'localhost',
  port: ck.DB_PORT,
  dialect: 'mysql',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

// database call
db.authenticate()
    .then(() => ck.ENVIORNMENT === 'PRODUCTION' ? console.log('===========AUTH PRODUCTION=============================') : console.log('----------AUTH DEVELOPMENT---------------'))
  .catch((error) => console.error("Connection error :", error));

// sync database for development
db.sync({ force: true })
  .then(() => {
    console.log("Synced db.");
  })
  .catch((error) => {
    console.error("Failed to Sync db : " + error.message);
  });

module.exports = {db};
