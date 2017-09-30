var Sequelize = require('sequelize');

module.exports = new Sequelize('test','root','root', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 25000
    }
});