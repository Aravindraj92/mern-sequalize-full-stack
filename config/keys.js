const Sequelize = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false
});

module.exports = sequelize;
