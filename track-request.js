module.exports = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      format: 'email',
      required: false
    },
    userId: {
      type: 'string',
      required: false
    },
    eventName: {
      type: 'string',
      required: true
    },
    campaignId: {
      type: 'number',
      required: false
    },
    templateId: {
      type: 'number',
      required: false
    },
    createdAt: {
      type: 'number',
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
