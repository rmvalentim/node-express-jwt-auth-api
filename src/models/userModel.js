import { DataTypes } from 'sequelize';
import sequelize from '../config/databaseConfig.js';
import bcrypt from 'bcrypt';
import '../config/dotenvConfig.js';
import ROLES from '../constants/roles.js';

const saltRounds = parseInt(process.env.SALT_ROUNDS);

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM(Object.values(ROLES)),
        defaultValue: ROLES.USER,
        allowNull: false
    }
}, {
    defaultScope: {
        attributes: { exclude: ['password'] },
    },
    scopes: {
        withPassword: {
            attributes: { include: ['password'] },
        },
    },
});

User.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, saltRounds);
});

export default User;