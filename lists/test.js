'use strict'

var test = require('tape')
var list = require('./')

test('Subscribe Request', function (t) {
  var validate = list.subscribe

  t.test('is valid with minimum inputs', function (t) {
    var isValid = validate({
      listId: 1,
      subscribers: [{
        email: 'test@test.com'
      }]
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is valid with maximum optional inputs', function (t) {
    var isValid = validate({
      listId: 1,
      subscribers: [{
        email: 'test@test.com',
        userId: '1',
        dataFields: {
          state: 'CA',
          city: 'SF'
        }
      }]
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is invalid with missing inputs', function (t) {
    var isValid = validate({
      subscribers: [{
        email: 'test@test.com',
        userId: '1',
        dataFields: {
          state: 'CA',
          city: 'SF'
        }
      }]
    })
    t.false(isValid)
    t.end()
  })

  t.test('is invalid with additional inputs', function (t) {
    var isValid = validate({
      listId: 1,
      subscribers: [{
        email: 'test@test.com',
        userId: '1',
        dataFields: {
          state: 'CA',
          city: 'SF'
        },
        additional: 'data'
      }]
    })
    t.false(isValid)
    t.end()
  })
})

test('Unsubscribe Request', function (t) {
  var validate = list.unsubscribe
  t.test('is valid with minimum inputs', function (t) {
    var isValid = validate({
      listId: 1,
      subscribers: [{
        email: 'test@test.com'
      }]
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is valid with maximum optional inputs', function (t) {
    var isValid = validate({
      listId: 1,
      campaignId: 2,
      channelUnsubscribe: true,
      subscribers: [{
        email: 'test@test.com',
        userId: '1',
        dataFields: {
          state: 'CA',
          city: 'SF'
        }
      }]
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is invalid with missing inputs', function (t) {
    var isValid = validate({
      subscribers: [{
        email: 'test@test.com',
        userId: '1',
        dataFields: {
          state: 'CA',
          city: 'SF'
        }
      }]
    })
    t.false(isValid)
    t.end()
  })

  t.test('is invalid with additional inputs', function (t) {
    var isValid = validate({
      listId: 1,
      campaignId: 2,
      channelUnsubscribe: true,
      subscribers: [{
        email: 'test@test.com',
        userId: '1',
        dataFields: {
          state: 'CA',
          city: 'SF'
        }
      }],
      additional: true
    })
    t.false(isValid)
    t.end()
  })
})
