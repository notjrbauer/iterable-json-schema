module.exports = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      format: 'email',
      required: true
    },
    campaignId: {
      type: ['number', 'null'],
      required: true
    },
    templateId: {
      type: ['number', 'null'],
      required: false
    },
    amount: {
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
  additionalProperties: false
}
