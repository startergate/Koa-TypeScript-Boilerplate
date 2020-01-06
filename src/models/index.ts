import { Sequelize } from "sequelize";
const config = require('../modules/dbInfo');

const sequelize = new Sequelize(config.database, config.id, config.pw, {
    host: config.host,
    dialect: config.dialect
});

export { sequelize, Sequelize };