const Joi = require('joi')

const getUserByIdSchema = Joi.object({
  id: Joi.number().integer().required()
})
const createUserSchema = Joi.object({
  id: Joi.number().integer(),
  username: Joi.string().min(5).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(18),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/).required(),
  role: Joi.string().max(12)
})

module.exports = { createUserSchema, getUserByIdSchema }
