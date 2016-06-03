module.exports = {
  type: 'object',
  properties: {
    campaignId: {
      type: ['number'],
      required: true
    },
    recipientEmail: {
      type: ['string'],
      format: 'email',
      required: true
    },
    dataFields: {
      type: 'object',
      required: false
    },
    sendAt: {
      type: ['string', 'null'],
      format: 'date-time'
    },
    attachments: {
      type: 'array',
      items: {
        $ref: '#attachment-entry'
      },
      required: false
    }
  },
  additionalProperties: false
}
