const { User, UserSchema } = require('./users.model.js')

const setupModels = sequelize => {
  User.init(UserSchema, User.config(sequelize))
}

module.exports = { setupModels }
