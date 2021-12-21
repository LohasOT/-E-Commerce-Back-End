require('dotenv').config()

const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.JAWSDB_URL ? process.env.JAWSDB_URL : process.env.LOCALDB_URL : 'mysql://root:Lohas199312!@localhost:3306/ecommerce_db')

module.exports = sequelize

const { Sequelize } = require('sequelize')

