const express = require('express')
const { routerApi } = require('./routes/index.js')

const app = express()

// Middlewares
app.use(express.json())

// Router
routerApi(app)

const conection = app.listen(3000, () => {
  console.log(`Estamos en ${conection.address().port}`)
})
