const { guid, hashify } = require('../../utils')
const persistence = require('./saved.schema')

class Saved {
  async get (id) {
    return persistence.get(id)
  }

  async getBy (filter) {
    return persistence.getBy(filter)
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

module.exports = Saved
