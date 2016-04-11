'use strict'

var test = require('tape')

var sms = require('./')

test('Target SMS Request', function (t) {
  var validate = sms.target

  t.test('is valid with email and minimum inputs', function (t) {
    var isValid = validate({
      campaignId: 1,
      recipentEmail: 'test@test.com'
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is invalid without required inputs', function (t) {
    var isValid = validate({
      dataFields: {}
    })
    t.false(isValid)
    t.end()
  })

  t.test('is valid with maximum optional inputs', function (t) {
    var isValid = validate({
      campaignId: 1,
      recipentEmail: 'test@test.com',
      dataFields: {
        date: 'fields'
      },
      sendAt: new Date().toISOString()
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is invalid with additional inputs', function (t) {
    var isValid = validate({
      campaignId: 1,
      recipentEmail: 'test@test.com',
      dataFields: {
        date: 'fields'
      },
      sendAt: new Date().toISOString(),
      additional: 'data'
    })
    t.false(isValid)
    t.end()
  })

  t.test('is invalid with non-isoformat string', function (t) {
    var isValid = validate({
      campaignId: 1,
      recipentEmail: 'test@test.com',
      dataFields: {
        date: 'fields'
      },
      sendAt: new Date().toUTCString()
    })
    t.false(isValid)
    t.end()
  })
})

