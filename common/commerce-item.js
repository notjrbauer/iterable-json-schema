module.exports = {
  type: 'object',
  properties: {
    id: {
      type: ['string', 'null'],
      required: true
    },
    sku: {
      type: ['string', 'null'],
      required: false
    },
    name: {
      type: ['string', 'null'],
      required: true
    },
    description: {
      type: ['string', 'null'],
      required: false
    },
    categories: {
      type: ['array', 'null'],
      required: false
    },
    price: {
      type: ['number', 'null'],
      required: true
    },
    quantity: {
      type: ['number', 'null'],
      required: true
    },
    imageUrl: {
      type: ['string', 'null'],
      required: false
    },
    url: {
      type: ['string', 'null'],
      required: false
    },
    dataFields: {
      type: ['object', 'null'],
      required: false
    }
  },
  additionalProperties: true
}
