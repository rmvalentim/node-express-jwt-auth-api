import sequelize from '../config/databaseConfig.js';
import User from './userModel.js';

const db = { sequelize, User };
export default db;