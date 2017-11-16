const { guid, hashify } = require('../../utils')
const persistence = require('./user.persistence')

class User {
  async get (id) {
    return persistence.get(id)
  }

  async getBy (filter) {
    return persistence.getBy(filter)
  }

  async list (filter) {
    return persistence.list(filter)
  }

  async create (data) {
    data.id = guid()
    data.created_at = new Date()
    data.password = await hashify(data.password)
    // you're able now to insert to relational database with persistence,
    // or use mongoose to insert into mongodb
    return persistence.insert(data)
  }
}

module.exports = User
