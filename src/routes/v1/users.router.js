const { Router } = require('express')
const { UsersService } = require('../../services/Users.service.js')
const validatorHandler = require('../../middlewares/validator.handler.js')
const { createUserSchema } = require('../../db/schemas/user.schema')

const router = Router()
const usersService = new UsersService()

router.get('/', async (req, res) => {
  const users = await usersService.getAllUsers()
  res.json(users)
})
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await usersService.getUserById(id)
    res.json(user)
  } catch (err) {
    next(err)
  }
})
router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req
      const newUser = await usersService.createUser(body)
      res.json(newUser)
    } catch (error) {
      console.log('Ocurrió un SUPER error')
      next(error)
    }
  }
)

module.exports = router
