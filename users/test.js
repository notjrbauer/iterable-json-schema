'use strict'

var test = require('tape')
var users = require('./')

test('Bulk Update Request', function (t) {
  var validate = users.bulkUpdate

  t.test('is valid with minimum inputs', function (t) {
    var isValid = validate({
      users: [{
        email: 'test@test.com'
      }]
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is valid with maximum optional inputs', function (t) {
    var isValid = validate({
      users: [{
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
      users: []
    })
    t.false(isValid)
    t.end()
  })

  t.test('is invalid with additional inputs', function (t) {
    var isValid = validate({
      users: [{
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

test('Update Subscription Request', function (t) {
  var validate = users.updateSubscription

  t.test('is valid with minimum inputs', function (t) {
    var isValid = validate({
      email: 'test@test.com'
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is valid with maximum optional inputs', function (t) {
    var isValid = validate({
      email: 'test@test.com',
      emailListIds: [1, 2, 3],
      unsubscribedChannelIds: [1, 2, 3],
      campaignId: 1,
      templateId: 1
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is invalid with missing inputs', function (t) {
    var isValid = validate({
      emailListIds: [1, 2, 3],
      unsubscribedChannelIds: [1, 2, 3],
      campaignId: 1,
      templateId: 1
    })
    t.false(isValid)
    t.end()
  })

  t.test('is invalid with additional inputs', function (t) {
    var isValid = validate({
      email: 'test@test.com',
      emailListIds: [1, 2, 3],
      unsubscribedChannelIds: [1, 2, 3],
      campaignId: 1,
      templateId: 1,
      additional: 'inputs'
    })
    t.false(isValid)
    t.end()
  })
})

test('Api Update User Request', function (t) {
  var validate = users.updateUser

  t.test('is valid with email and minimum inputs', function (t) {
    var isValid = validate({
      email: 'test@test.com'
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is valid with userId and minimum inputs', function (t) {
    var isValid = validate({
      userId: '1'
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is invalid without email or userId', function (t) {
    var isValid = validate({
      dataFields: {}
    })
    t.false(isValid)
    t.end()
  })

  t.test('is valid with maximum optional inputs', function (t) {
    var isValid = validate({
      email: 'test@test.com',
      userId: '1',
      dataFields: {
        date: 'fields'
      }
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is invalid with additional inputs', function (t) {
    var isValid = validate({
      email: 'test@test.com',
      eventName: 'eventName',
      userId: '1',
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

test('Update Email Request', function (t) {
  var validate = users.updateEmail

  t.test('is valid with email input', function (t) {
    var isValid = validate({
      currentEmail: 'test@test.com',
      newEmail: 'test1@test.com'
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is invalid with additional inputs', function (t) {
    var isValid = validate({
      currentEmail: 'test@test.com',
      newEmail: 'test1@test.com',
      dateFields: {}
    })
    t.false(isValid)
    t.end()
  })

  t.test('is invalid with missing inputs', function (t) {
    var isValid = validate({
      currentEmail: 'test@test.com'
    })
    t.false(isValid)
    t.end()
  })
})

test('Disable Device Request', function (t) {
  var validate = users.disableDevice

  t.test('is valid with minimum inputs', function (t) {
    var isValid = validate({
      token: 'im a token'
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is invalid with additional inputs', function (t) {
    var isValid = validate({
      token: 'im a token',
      email: 'test@test.com',
      bad: 'bad'
    })
    t.false(isValid)
    t.end()
  })

  t.test('is valid with maximum inputs', function (t) {
    var isValid = validate({
      token: 'im a token',
      email: 'test@test.com'
    })
    t.ok(isValid)
    t.end()
  })
})
