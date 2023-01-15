const sequelize = require('../libs/sequelize.js')
const { models } = sequelize

class UsersService {
  async getAllUsers () {
    const rta = await models.Users.findAll()
    return rta
  }

  async getUserById (id) {
    const rta = await models.Users.findByPk(id)
    return rta
  }

  async createUser (user) {
    const rta = await models.Users.create(user)
    return rta
  }

  async updateUser (id, updates) {
    const user = await this.getUserById(id)
    const rta = await models.Users.update(updates, user)
    return rta
  }

  async deleteUser (id) {
    const user = await this.getUserById(id)
    const rta = await models.Users.destroy(user)
    return rta
  }
}

module.exports = { UsersService }
