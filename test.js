'use strict'

var test = require('tape')
var validator = require('is-my-json-valid')
var common = require('../common')

test('Subscribe Request', function (t) {
  var subscribeReq = require('./subscribe-request')
  var user = require('./api-user')
  var validate = validator(subscribeReq, {
    schemas: {
      'api-user': user
    }
  })

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
  var unsubscribeReq = require('./unsubscribe-request')
  var user = require('./api-user')
  var validate = validator(unsubscribeReq, {
    schemas: {
      'api-user': user
    }
  })

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

test('Workflow Request', function (t) {
  var workflowReq = require('./trigger-workflow-request')
  var validate = validator(workflowReq)

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

test('Track Conversion Request', function (t) {
  var trackConvReq = require('./track-conversion-request')
  var validate = validator(trackConvReq)

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
  var trackPushOpenReq = require('./track-push-open-request')
  var validate = validator(trackPushOpenReq)

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
  var trackReq = require('./track-request')
  var validate = validator(trackReq)

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

test('Api Update User Request', function (t) {
  var validate = users.updateEmail

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




test('Disable Device Request', function (t) {
  var disableDevReq = require('./disable-device-request')
  var validate = validator(disableDevReq)

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

test('Target Push Request', function (t) {
  var targetPushReq = require('./target-push-request')
  var validate = validator(targetPushReq)

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

test('Target SMS Request', function (t) {
  var targetSmsReq = require('./target-sms-request')
  var validate = validator(targetSmsReq)

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

test('Track Purchase Request', function (t) {
  var trackPurchaseReq = require('./track-purchase-request')
  var user = require('./api-user-update-request')
  var item = require('./commerce-item')
  var validate = validator(trackPurchaseReq, {
    schemas: {
      'api-user-update-request': user,
      'commerce-item': item
    }
  })

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

  t.test('is invalid with additional inputs', function (t) {
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
      total: 100,
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

test('Update Cart Request', function (t) {
  var updateCartReq = require('./update-cart-request')
  var user = require('./api-user-update-request')
  var item = require('./commerce-item')
  var validate = validator(updateCartReq, {
    schemas: {
      'api-user-update-request': user,
      'commerce-item': item
    }
  })

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

test('Target Email Request', function (t) {
  var targetEmailReq = require('./target-email-request')
  var attachmentEntry = require('./attachment-entry')
  var validate = validator(targetEmailReq, {
    schemas: {
      'attachment-entry': attachmentEntry
    }
  })

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
