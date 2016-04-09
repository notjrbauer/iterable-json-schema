module.exports = {
  type: 'object',
  properties: {
    listId: {
      type: 'number',
      required: true
    },
    subscribers: {
      type: 'array',
      required: true,
      items: {
        $ref: '#api-user'
      }
    }
  }
}
