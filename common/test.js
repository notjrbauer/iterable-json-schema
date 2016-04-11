'use strict'

var test = require('tape')
var validator = require('is-my-json-valid')
var common = require('./')

test('unsubscriber', function (t) {
  var unsubscriber = common.unsubscriber
  var validate = validator(unsubscriber)

  t.test('is valid with email input', function (t) {
    var isValid = validate({
      email: 'test@test.com'
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is invalid with additional inputs', function (t) {
    var isValid = validate({
      email: 'test@test.com',
      bad: 'bad'
    })
    t.false(isValid)
    t.end()
  })
})

test('list-details', function (t) {
  var listDetail = common.listDetail
  var validate = validator(listDetail)

  t.test('is valid with proper inputs', function () {
    var isValid = validate({
      id: 1,
      name: 'john'
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is invalid with invalid props', function (t) {
    var isValid = validate({
      id: 1,
      name: 1337
    })
    t.false(isValid)
    t.end()
  })
})

test('Commerce Item', function (t) {
  var item = common.commerceItem
  var validate = validator(item)

  t.test('is valid with minimum inputs', function (t) {
    var isValid = validate({
      id: '12',
      name: 'item',
      price: 1200,
      quantity: 5
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is invalid with additional inputs', function (t) {
    var isValid = validate({
      id: '12',
      name: 'item',
      price: 1200,
      quantity: 5,
      additional: 'bad'
    })
    t.false(isValid)
    t.end()
  })
})

test('attachment-entry', function (t) {
  var attachmentEntry = common.attachmentEntry
  var validate = validator(attachmentEntry)

  t.test('is valid with required inputs', function (t) {
    var isValid = validate({
      mimeType: 'application/octet-stream',
      name: 'john',
      content: new Buffer('basesixtyfour').toString('base64')
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is valid with maximum amount of inputs', function (t) {
    var isValid = validate({
      valid: true,
      mimeType: 'application/octet-stream',
      name: 'john',
      content: new Buffer('basesixtyfour').toString('base64')
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is invalid with additional inputs', function (t) {
    var isValid = validate({
      valid: true,
      mimeType: 'application/octet-stream',
      name: 'john',
      content: new Buffer('basesixtyfour').toString('base64'),
      additional: 'data'
    })
    t.false(isValid)
    t.end()
  })
})

test('Api User', function (t) {
  var user = common.apiUser
  var validate = validator(user)

  t.test('is valid with minimum inputs', function (t) {
    var isValid = validate({
      email: 'test@test.com'
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is valid with maximum input amount', function (t) {
    var isValid = validate({
      email: 'test@test.com',
      dataFields: {
        data: 'fields'
      },
      userId: '12'
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is invalid with additional inputs', function (t) {
    var isValid = validate({
      email: 'test@test.com',
      apple: 'orange'
    })
    t.false(isValid)
    t.end()
  })
})

