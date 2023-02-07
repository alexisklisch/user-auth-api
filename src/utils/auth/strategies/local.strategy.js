const boom = require('@hapi/boom')
const bcrypt = require('bcryptjs')
const { Strategy } = require('passport-local')
const { UsersService } = require('../../../services/Users.service')

const usersServices = new UsersService()

const localStrategy = new Strategy(async (email, password, done) => {
  try {
    const user = await usersServices.getUserByEmail(email)

    if (!user) {
      done(boom.unauthorized())
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      done(boom.unauthorized())
    }

    done(null, user)
  } catch (err) {
    done(err, false)
  }
})

module.exports = localStrategy
