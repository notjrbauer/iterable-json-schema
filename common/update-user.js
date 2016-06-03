module.exports = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      format: 'email',
      required: false
    },
    userId: {
      type: ['string', 'null'],
      required: false
    },
    dataFields: {
      type: 'object',
      required: false
    }
  },
  anyOf: [
    {'required': ['userId']},
    {'required': ['email']}
  ],
  additionalProperties: false
}
