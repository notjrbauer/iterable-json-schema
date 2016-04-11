'use strict'

var test = require('tape')

var workflow = require('./')

test('Workflow Request', function (t) {
  var validate = workflow.trigger

  t.test('is valid with minimum inputs', function (t) {
    var isValid = validate({
      workflowId: 1
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is valid with maximum optional inputs', function (t) {
    var isValid = validate({
      workflowId: 1,
      email: 'test@test.com',
      dataFields: {
        data: 'fields'
      },
      listId: 1
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is invalid with missing inputs', function (t) {
    var isValid = validate({
      email: 'test@test.com',
      dataFields: {
        data: 'fields'
      },
      listId: 1
    })
    t.false(isValid)
    t.end()
  })

  t.test('is invalid with additional inputs', function (t) {
    var isValid = validate({
      workflowId: 1,
      email: 'test@test.com',
      dataFields: {
        data: 'fields'
      },
      listId: 1,
      additional: 'inputs'
    })
    t.false(isValid)
    t.end()
  })
})
