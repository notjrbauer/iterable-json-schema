module.exports = {
  type: 'object',
  properties: {
    email: {
      type: ['string', 'null'],
      format: 'email',
      required: false
    },
    userId: {
      type: ['string', 'null'],
      required: false
    },
    campaignId: {
      type: ['number', 'null'],
      required: true
    },
    templateId: {
      type: ['number', 'null'],
      required: false
    },
    createdAt: {
      type: ['number', 'null'],
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
