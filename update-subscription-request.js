module.exports = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      format: 'email',
      required: true
    },
    emailListIds: {
      type: 'array',
      items: {
        type: 'number'
      },
      required: false
    },
    unsubscribedChannelIds: {
      type: 'array',
      items: {
        type: 'number'
      },
      required: false
    },
    unsubscribeMessageTypeIds: {
      type: 'array',
      items: {
        type: 'number'
      },
      required: false
    },
    campaignId: {
      type: 'number',
      required: false
    },
    templateId: {
      type: 'number',
      required: false
    }
  },
  additionalProperties: false
}
