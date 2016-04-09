module.exports = {
  type: 'object',
  properties: {
    currentEmail: {
      type: 'string',
      format: 'email',
      required: true
    },
    newEmail: {
      type: 'string',
      format: 'email',
      required: true
    }
  },
  additionalProperties: false
}
