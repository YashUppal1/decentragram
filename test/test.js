const Decentragram = artifacts.require('./Decentragram.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Decentragram', ([deployer, author, tipper]) => {
  let decentragram

  before(async () => {
    decentragram = await Decentragram.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = await decentragram.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async () => {
      const name = await decentragram.name()
      assert.equal(name, 'Decentragram')
    })
  })
  
  describe('images', async () => {
    let result
    const hash = 'abc123'

    before(async () => {
      result = await decentragram.uploadImage(hash, 'Image Description', {from: author})
      imageCount = await decentragram.imageCount()
    })

    it('creates images', async () => {
      result = await decentragram.uploadImage()
      let image = await decentragram.images(1)
      console.log(image)
    })
  })
})