import Joi from 'joi'

const id = Joi.number().integer()
const username = Joi.string().alphanum().min(3).max(16)
const age = Joi.number().min(18)

export const userSchema = {
  id: id.required(),
  username: username.required(),
  age
}
