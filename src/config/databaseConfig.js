import { Sequelize } from 'sequelize';
import '../config/dotenvConfig.js';

const sequelize = new Sequelize({
    dialect: process.env.DB_DIALECT,
    storage: process.env.DB_STORAGE,
    logging: false,
});

export default sequelize;