require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: process.env.HOSTNAME,
        dialect: 'postgres',
        dialectOptions: {
            decimalNumbers: true,
        },
    });

module.exports = sequelize;
