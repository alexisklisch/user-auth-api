import express from 'express'
import usersRouter from './v1/users.router.js'

export const routerApi = app => {
  const routerV1 = express.Router()

  app.use('/v1', routerV1)
  routerV1.use('/users', usersRouter)
}
