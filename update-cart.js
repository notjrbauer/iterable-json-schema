module.exports = {
  type: 'object',
  properties: {
    user: {
      $ref: '#api-user-update-request',
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
