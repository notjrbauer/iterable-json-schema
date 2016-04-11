'use strict'

var test = require('tape')

var email = require('./')

test('Target Email Request', function (t) {
  var validate = email.target

  t.test('is valid with minimum inputs', function (t) {
    var isValid = validate({
      campaignId: 1,
      recipientEmail: 'test@test.com'
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is valid with maximum amount of inputs', function (t) {
    var isValid = validate({
      campaignId: 1,
      recipientEmail: 'test@test.com',
      dataFields: {},
      sendAt: new Date().toISOString(),
      attachments: [{
        valid: true,
        mimeType: 'application/octet-stream',
        name: 'name',
        content: 'base64'
      }]
    })
    t.ok(isValid)
    t.end()
  })

  t.test('is invalid when missing required inputs', function (t) {
    var isValid = validate({
      campaignId: 1,
      dataFields: {},
      sendAt: new Date().toISOString(),
      attachments: [{
        valid: true,
        mimeType: 'application/octet-stream',
        name: 'name',
        content: 'base64'
      }]
    })
    t.false(isValid)
    t.end()
  })

  t.test('is invalid when sendAt is not in ISOFormat', function (t) {
    var isValid = validate({
      campaignId: 1,
      dataFields: {},
      sendAt: new Date().toUTCString(),
      attachments: [{
        valid: true,
        mimeType: 'application/octet-stream',
        name: 'name',
        content: 'base64'
      }]
    })
    t.false(isValid)
    t.end()
  })
})
