const express = require('express')
const { routerApi } = require('./routes/index.js')
const { errorHandler, logErrors, boomErrorHandler } = require('./middlewares/error.handler')

const app = express()

// Middlewares
app.use(express.json())
require('./utils/auth/index.js')

// Router
routerApi(app)

// More middlewares
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

// Init the server
const conection = app.listen(3000, () => {
  console.log(`We are on the port ${conection.address().port}`)
})
