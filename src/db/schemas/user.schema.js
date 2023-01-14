const Joi = require('joi')

const userSchema = Joi.object({
  id: Joi.number().integer(),
  username: Joi.string().min(5),
  email: Joi.string().email(),
  age: Joi.number().integer().min(18),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/)
}).with('id', 'username', 'email', 'password')

module.exports = userSchema
