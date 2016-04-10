module.exports = {
  type: 'object',
  properties: {
    token: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      format: 'email',
      required: false
    }
  },
  additionalProperties: false
}
