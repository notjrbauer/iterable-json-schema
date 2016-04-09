module.exports = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      format: 'email',
      required: true
    }
  },
  additionalProperties: false
}
