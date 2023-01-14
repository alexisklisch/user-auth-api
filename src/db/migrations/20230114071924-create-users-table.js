'use strict'
const { DataTypes } = require('sequelize')
const { USERS_TABLE } = require('../models/users.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USERS_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      username: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      },
      age: {
        type: DataTypes.INTEGER
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USERS_TABLE)
  }
}
