'use strict'

var test = require('tape')

var events = require('./')

test('Track Conversion Request', function (t) {
  var validate = events.trackConversion

  t.test('is valid with minimum inputs', function (t) {
    var isValid = validate({
      email: 'test@test.com',
      campaignId: 1
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is valid with maximum optional inputs', function (t) {
    var isValid = validate({
      email: 'test@test.com',
      campaignId: 1,
      templateId: 1,
      amount: 10,
      createdAt: Date.parse(Date.now()),
      dataFields: {
        date: 'fields'
      }
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is invalid with missing inputs', function (t) {
    var isValid = validate({
      templateId: 1,
      amount: 10,
      createdAt: Date.parse(Date.now()),
      dataFields: {
        date: 'fields'
      }
    })
    t.false(isValid)
    t.end()
  })

  t.test('is invalid with additional inputs', function (t) {
    var isValid = validate({
      email: 'test@test.com',
      campaignId: 1,
      templateId: 1,
      amount: 10,
      createdAt: Date.parse(Date.now()),
      dataFields: {
        date: 'fields'
      },
      additional: 'input'
    })
    t.false(isValid)
    t.end()
  })
})

test('Track Push Open Request', function (t) {
  var validate = events.trackPushOpen

  t.test('is valid with email and minimum inputs', function (t) {
    var isValid = validate({
      email: 'test@test.com',
      campaignId: 1
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is valid with userId and minimum inputs', function (t) {
    var isValid = validate({
      userId: '1',
      campaignId: 1
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is invalid without email or userId', function (t) {
    var isValid = validate({
      campaignId: 1
    })
    t.false(isValid)
    t.end()
  })

  t.test('is valid with maximum optional inputs', function (t) {
    var isValid = validate({
      email: 'test@test.com',
      userId: '1',
      campaignId: 1,
      templateId: 1,
      createdAt: Date.parse(Date.now()),
      dataFields: {
        date: 'fields'
      }
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is invalid with missing inputs', function (t) {
    var isValid = validate({
      templateId: 1,
      createdAt: Date.parse(Date.now()),
      dataFields: {
        date: 'fields'
      }
    })
    t.false(isValid)
    t.end()
  })

  t.test('is invalid with additional inputs', function (t) {
    var isValid = validate({
      email: 'test@test.com',
      userId: '1',
      campaignId: 1,
      templateId: 1,
      createdAt: Date.parse(Date.now()),
      dataFields: {
        date: 'fields'
      },
      additional: 'input'
    })
    t.false(isValid)
    t.end()
  })
})

test('Track Request', function (t) {
  var validate = events.track

  t.test('is valid with email and minimum inputs', function (t) {
    var isValid = validate({
      email: 'test@test.com',
      eventName: 'eventName'
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is valid with userId and minimum inputs', function (t) {
    var isValid = validate({
      userId: '1',
      eventName: 'eventName'
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is invalid without email or userId', function (t) {
    var isValid = validate({
      eventName: 'eventName'
    })
    t.false(isValid)
    t.end()
  })

  t.test('is valid with maximum optional inputs', function (t) {
    var isValid = validate({
      email: 'test@test.com',
      userId: '1',
      eventName: 'eventName',
      campaignId: 1,
      templateId: 1,
      createdAt: Date.parse(Date.now()),
      dataFields: {
        date: 'fields'
      }
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is invalid with missing inputs', function (t) {
    var isValid = validate({
      templateId: 1,
      createdAt: Date.parse(Date.now()),
      dataFields: {
        date: 'fields'
      }
    })
    t.false(isValid)
    t.end()
  })

  t.test('is invalid with additional inputs', function (t) {
    var isValid = validate({
      email: 'test@test.com',
      eventName: 'eventName',
      userId: '1',
      campaignId: 1,
      templateId: 1,
      createdAt: Date.parse(Date.now()),
      dataFields: {
        date: 'fields'
      },
      additional: 'input'
    })
    t.false(isValid)
    t.end()
  })
})
