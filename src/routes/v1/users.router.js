const { Router } = require('express')
const { UsersService } = require('../../services/Users.service.js')
const router = Router()
const usersService = new UsersService()

router.get('/', async (req, res) => {
  const users = await usersService.getAllUsers()
  res.json(users)
})

module.exports = router
