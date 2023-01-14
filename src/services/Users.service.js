const sequelize = require('../libs/sequelize.js')
const { models } = sequelize

class UsersService {
  async getAllUsers () {
    const rta = await models.Users.findAll()
    return rta
  }
}

module.exports = { UsersService }
