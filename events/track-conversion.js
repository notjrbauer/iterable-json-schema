module.exports = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      format: 'email',
      required: true
    },
    campaignId: {
      type: 'number',
      required: true
    },
    templateId: {
      type: 'number',
      required: false
    },
    amount: {
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
  additionalProperties: false
}
