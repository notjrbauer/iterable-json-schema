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
      type: 'number',
      required: false
    },
    templateId: {
      type: 'number',
      required: false
    },
    total: {
      type: 'number',
      required: true
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
