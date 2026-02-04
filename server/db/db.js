const { Sequelize } = require('sequelize');

// Create and export main db instance
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './temp.sqlite',
  // logging: (...msg) => console.log(msg), // for verbose logs
});

module.exports = sequelize;