const Service = require('../twitter.service')
const Twitter = require('twitter')

var client = new Twitter({
  consumer_key: 'iQ287Kjl5P8rF9auJUVbpp3B1',
  consumer_secret: 'vpGkIvquwD28RZbgtqs92mBI3exgHyGQr1vPu3h4vH2L563eNN',
  access_token_key: '778814634941816832-bC7SInAFN38u93eIX7DTHf42xuPKGdl',
  access_token_secret: 'dt1LgjYXMoexfwO24eRkJ4WRdoWiT1RSczQxrBB3QqqDh'
})

describe('#list() tweets from twitter', () => {
  it('should list tweets', async () => {
   var result = await Service.get('masterchefbr')
   expect(result).toBeDefined
   expect(Array.isArray(result)).toBe(true)
   expect(typeof result[0]).toBe('string')
  })
})
