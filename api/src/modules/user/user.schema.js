const Joi = require('joi')

const schema = {
  login: Joi
    .string()
    .min(1)
    .max(120)
    .trim()
    .required().label('Login'),
  password: Joi
    .string()
    .min(8)
    .max(60)
    .trim()
    .regex(/(?=[\s\S]*[a-z][\s\S]*)(?=[\s\S]*[0-9][\s\S]*)/i, 'strong password')
    .required().label('Senha')
}

function getSchema () {
  return schema
}

function validate (body) {
  const result = Joi.validate(body, schema)
  if (result.error) {
    throw new Error(result.error)
  }
  if (result.errors) {
    throw new Error(result.errors)
  }

  return true
}

module.exports = {
  getSchema,
  validate
}
