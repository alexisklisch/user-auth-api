import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({
    name: 'Alexito',
    pareja: 'Florencia',
    estado: 'A la distancia'
  })
})

export default router
