const { DataTypes, Model } = require('sequelize')

const USERS_TABLE = 'users'

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  username: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  age: {
    type: DataTypes.INTEGER
  }
}
class User extends Model {
  static associate (models) {}

  static config (sequelize) {
    return {
      sequelize,
      tableName: USERS_TABLE,
      modelName: 'Users',
      timestamps: false
    }
  }
}

module.exports = { UserSchema, User, USERS_TABLE }
