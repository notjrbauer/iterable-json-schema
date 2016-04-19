module.exports = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      format: 'email',
      required: 'false'
    },
    workflowId: {
      type: 'number',
      required: true
    },
    dataFields: {
      type: 'object',
      required: false
    },
    listId: {
      type: 'object',
      required: false
    }
  },
  additionalProperties: false
}
