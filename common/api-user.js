module.exports = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      format: 'email',
      required: true
    },
    dataFields: {
      type: 'object',
      required: false
    },
    userId: {
      type: ['string', 'null'],
      required: false
    }
  },
  additionalProperties: false
}
