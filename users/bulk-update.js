module.exports = {
  type: 'object',
  properties: {
    users: {
      type: 'array',
      required: true,
      items: {
        $ref: '#api-user'
      },
      minItems: 1
    }
  },
  additionalProperties: false
}
