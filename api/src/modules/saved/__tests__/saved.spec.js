const Service = require('../saved.service')
const faker = require('faker');

describe('#create() saved', () => {
  it('should add saved with text', async () => {
    const payload = faker.name.findName();
    const result = await Service.create(payload)
    expect(result).toHaveProperty('text')
    expect(result.text).toBe(payload);
  })

  it('should list saved tweets', async () => {
    const result = await Service.list()
    expect(result).toBeDefined();
  })
})
