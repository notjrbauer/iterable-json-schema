module.exports = {
  type: 'object',
  properties: {
    token: {
      type: 'string',
      required: true
    },
    email: {
      type: ['string', 'null'],
      format: 'email',
      required: false
    }
  },
  additionalProperties: false
}
