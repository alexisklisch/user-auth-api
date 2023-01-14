const express = require('express')
const usersRouter = require('./v1/users.router.js')

const routerApi = app => {
  const routerV1 = express.Router()

  app.use('/v1', routerV1)
  routerV1.use('/users', usersRouter)
}

module.exports = { routerApi }
