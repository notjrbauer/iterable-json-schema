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
    }
  },
  additionalProperties: false
}
