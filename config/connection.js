const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('mysql://root:Lohas199312!@localhost:3306/ecommerce_db')

module.exports = sequelize