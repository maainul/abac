const Dbc = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "bex@2663",
    DB: "rbac",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };
  export default Dbc;