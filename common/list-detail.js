module.exports = {
  type: 'object',
  properties: {
    id: {
      type: 'number',
      required: true
    },
    name: {
      type: ['string', 'null'],
      required: true
    }
  }
}
