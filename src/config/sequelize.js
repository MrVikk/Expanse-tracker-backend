import { Sequelize } from "sequelize";
import dbConfig from "./db.config.js";

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect || mysql,
    logging: false, // DISABLE SQL QUERY LOGGING
  }
);

export default sequelize;
