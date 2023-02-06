const passport = require('passport')
const localStrategy = require('./strategies/local.strategie.js')

passport.use(localStrategy)
