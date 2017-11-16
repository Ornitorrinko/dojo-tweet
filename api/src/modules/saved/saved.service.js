const Model = require('./saved.model')
const Schema = require('./saved.schema')

const create = async (body) => {
  try {
    let s = new Schema()
    const saved = new Model()
    const result = await s.create({tweet: body})

    return { text: body }
  } catch (err) {
    console.log('err', err)
    throw err
  }
}

const get = async (id) => {
  try {
    let s = new Schema()
    const result = await s.list()
    return result
  } catch (err) {
    console.log('err', err)
    throw err
  }
}

const list = async () => {
  try {
    let s = new Schema()
    const result = await s.list()
    return result
  } catch (err) {
    console.log('err', err)
    throw err
  }
}

const update = async (id, body) => {

}

module.exports = {
  list,
  create,
  get,
  update
}
