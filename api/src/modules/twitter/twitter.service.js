const Model = require('./twitter.model')
const Schema = require('./twitter.schema')
const Twitter = require('twitter')

var client = new Twitter({
  consumer_key: 'iQ287Kjl5P8rF9auJUVbpp3B1',
  consumer_secret: 'vpGkIvquwD28RZbgtqs92mBI3exgHyGQr1vPu3h4vH2L563eNN',
  access_token_key: '778814634941816832-bC7SInAFN38u93eIX7DTHf42xuPKGdl',
  access_token_secret: 'dt1LgjYXMoexfwO24eRkJ4WRdoWiT1RSczQxrBB3QqqDh'
})

const get = async (hashtag) => {
  const params = {
    q: `#${hashtag}`,
    count: 10,
    resultType: 'recent',
    include_entities: false
  };

  return client.get('search/tweets.json', params)
    .then((results) => {
      return results.statuses.map(item => item.text)
    })
}

module.exports = {
  get
}
