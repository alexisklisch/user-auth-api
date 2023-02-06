const { Router } = require('express')

const router = Router()

router.get('/', async (req, res) => {
  res.send('Has llegado a un lugar bastante secreto. Pero no el más.')
})

module.exports = router
