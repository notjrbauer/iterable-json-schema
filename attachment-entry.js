module.exports = {
  type: 'object',
  properties: {
    valid: {
      type: 'boolean',
      required: false
    },
    mimeType: {
      type: 'string',
      enum: ['application/octet-stream'],
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    content: {
      type: 'string',
      required: true
    }
  },
  additionalProperties: false
}
