module.exports = {
  type: 'object',
  properties: {
    campaignId: {
      type: 'number',
      required: true
    },
    recipentEmail: {
      type: 'string',
      format: 'email',
      required: true
    },
    dataFields: {
      type: 'object',
      required: false
    },
    sendAt: {
      type: 'string',
      format: 'date-time',
      required: false
    }
  },
  additionalProperties: false
}
