module.exports = {
  type: 'object',
  properties: {
    user: {
      $ref: '#update-user',
      required: true
    },
    items: {
      type: 'array',
      items: {
        $ref: '#commerce-item'
      },
      required: true
    },
    campaignId: {
      type: ['number', 'null'],
      required: false
    },
    templateId: {
      type: ['number', 'null'],
      required: false
    },
    total: {
      type: ['number', 'null'],
      required: true
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
