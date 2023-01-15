'use strict'
const { DataTypes } = require('sequelize')
const { USERS_TABLE } = require('../models/users.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(USERS_TABLE, 'password', {
      allowNull: false,
      type: DataTypes.STRING
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(USERS_TABLE, 'password')
  }
}
