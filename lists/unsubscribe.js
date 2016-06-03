module.exports = {
  type: 'object',
  properties: {
    listId: {
      type: ['number'],
      required: true
    },
    campaignId: {
      type: ['number', 'null'],
      required: false
    },
    channelUnsubscribe: {
      type: 'boolean',
      required: false
    },
    subscribers: {
      type: 'array',
      required: true,
      items: {
        $ref: '#api-user'
      }
    }
  },
  additionalProperties: false
}
