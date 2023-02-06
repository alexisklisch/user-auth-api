const express = require('express')
const usersRouter = require('./v1/users.router.js')
const secretRouter = require('./v1/secret.router.js')
const authRouter = require('./v1/auth.router')

const routerApi = app => {
  const routerV1 = express.Router()

  app.use('/v1', routerV1)
  routerV1.use('/users', usersRouter)
  routerV1.use('/secret', secretRouter)
  routerV1.use('/auth', authRouter)
}

module.exports = { routerApi }
