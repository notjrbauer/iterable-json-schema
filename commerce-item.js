
module.exports = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      required: true
    },
    sku: {
      type: 'string',
      required: false
    },
    name: {
      type: 'string',
      required: true
    },
    description: {
      type: 'number',
      required: false
    },
    categories: {
      type: 'array',
      required: false
    },
    price: {
      type: 'number',
      required: true
    },
    quantity: {
      type: 'number',
      required: true
    },
    imageUrl: {
      type: 'string',
      required: false
    },
    url: {
      type: 'string',
      required: false
    },
    dataFields: {
      type: 'object',
      required: false
    }
  },
  additionalProperties: false
}
