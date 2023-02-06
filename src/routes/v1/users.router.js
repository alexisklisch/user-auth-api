const { Router } = require('express')
const { UsersService } = require('../../services/Users.service.js')
const validatorHandler = require('../../middlewares/validator.handler.js')
const {
  createUserSchema,
  getUserByIdSchema
} = require('../../db/schemas/user.schema')

const router = Router()
const usersService = new UsersService()

router.get('/', async (req, res) => {
  const users = await usersService.getAllUsers()
  res.json(users)
})

router.get(
  '/:email', async (req, res, next) => {
    try {
      const { email } = req.params
      const user = await usersService.getUserByEmail(email)
      res.json(user)
    } catch (err) {
      next(err)
    }
  }
)

router.get(
  '/:id',
  validatorHandler(getUserByIdSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const user = await usersService.getUserById(id)
      res.json(user)
    } catch (err) {
      next(err)
    }
  }
)

router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req
      const newUser = await usersService.createUser(body)
      res.json(newUser)
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router
