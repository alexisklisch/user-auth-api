const { Router } = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../../config.js')

const router = Router()

router.post('/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user
      const payload = {
        sub: user.id,
        role: user.role
      }

      const token = jwt.sign(payload, jwtSecret)

      res.json({ user, token })
    } catch (err) {
      next(err)
    }
  })

module.exports = router
