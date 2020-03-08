import { Sequelize } from "sequelize";
import db from "./setting";

const sequelize = new Sequelize(db.database, db.id, db.pw, {
    host: db.host,
    dialect: db.dialect
});

export { sequelize, Sequelize };