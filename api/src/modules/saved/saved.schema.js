const { guid, hashify } = require('../../utils')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dojo-node', { useMongoClient: true });
mongoose.Promise = global.Promise;

const Model = mongoose.model('Saved', { id: String, tweet: String, created_at: Date });

class Saved {
  async get (id) {
  }

  async list (filter) {
    return Model.find(function (err, result) {
      if (err) return console.error(err);
      console.log(result);
      return result;
    })
  }

  validate (valid) {
    return true
  }

  async create (data) {
    data.id = guid()
    data.created_at = new Date()

    let saved = new Model(data);
    return saved.save();
  }
}

module.exports = Saved
