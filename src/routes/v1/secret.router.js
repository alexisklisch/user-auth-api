const { Router } = require('express')
const passport = require('passport')

const router = Router()

router.get('/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    res.send('Has llegado a un lugar bastante secreto. Pero no el más.')
  })

module.exports = router
