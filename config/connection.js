require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: "postgresql://postgress:bDvDRFY1Ie5itpugrE0DRlLDQtMSmrHq@dpg-cqjajlmehbks73c8t8sg-a/tech_blog_db_maom",
        dialect: 'postgres',
        dialectOptions: {
            decimalNumbers: true,
        },
    });

module.exports = sequelize;
