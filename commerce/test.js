'use strict'

var test = require('tape')
var commerce = require('./')

test('Update Cart Request', function (t) {
  var validate = commerce.updateCart

  t.test('is valid with minimum/maximum inputs', function (t) {
    var isValid = validate({
      user: {
        email: 'test@test.com'
      },
      items: [{
        id: '1',
        name: 'item one',
        price: 100,
        quantity: 1
      }]
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is invalid with missing required inputs', function (t) {
    var isValid = validate({
      items: [{
        id: '1',
        name: 'item one',
        price: 100,
        quantity: 1
      }]
    })
    t.false(isValid)
    t.end()
  })

  t.test('is invalid with additional inputs', function (t) {
    var isValid = validate({
      user: {
        email: 'test@test.com'
      },
      items: [{
        id: '1',
        name: 'item one',
        price: 100,
        quantity: 1
      }],
      additional: 'inputs'
    })
    t.false(isValid)
    t.end()
  })

  t.test('is invalid with 0 items', function (t) {
    var isValid = validate({
      user: {
        email: 'test@test.com'
      },
      items: [],
      additional: 'inputs'
    })
    t.false(isValid)
    t.end()
  })
})

test('Track Purchase Request', function (t) {
  var validate = commerce.trackPurchase

  t.test('is valid with minimum inputs', function (t) {
    var isValid = validate({
      user: {
        email: 'test@test.com'
      },
      items: [{
        id: '1',
        name: 'item one',
        price: 100,
        quantity: 1
      }],
      total: 100
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is valid with maximum inputs', function (t) {
    var isValid = validate({
      user: {
        email: 'test@test.com'
      },
      campaignId: 1,
      templateId: 2,
      createdAt: Date.parse(new Date()),
      dataFields: {},
      items: [{
        id: '1',
        name: 'item one',
        price: 100,
        quantity: 1
      }],
      total: 100
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is invalid with missing required inputs', function (t) {
    var isValid = validate({
      campaignId: 1,
      templateId: 2,
      createdAt: Date.parse(new Date()),
      dataFields: {},
      total: 100
    })
    t.false(isValid)
    t.end()
  })

  t.test('is invalid with 0 items', function (t) {
    var isValid = validate({
      user: {
        email: 'test@test.com'
      },
      campaignId: 1,
      templateId: 2,
      createdAt: Date.parse(new Date()),
      dataFields: {},
      items: [],
      total: 100,
      additional: 'inputs'
    })
    t.false(isValid)
    t.end()
  })
})
