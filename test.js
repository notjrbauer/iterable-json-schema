'use strict'

var test = require('tape')
var validator = require('is-my-json-valid')

test('unsubscriber', function (t) {
  var unsubscriber = require('./unsubscriber')
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
  var listDetail = require('./list-detail')
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
  var item = require('./commerce-item')
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

test('Api User', function (t) {
  var user = require('./api-user')
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
  var workflowReq = require('./workflow-request')
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

test('Update Email Request', function (t) {
  var updateEmailReq = require('./update-email-request')
  var validate = validator(updateEmailReq)

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

test('Bulk Update Request', function (t) {
  var bulkUpdateReq = require('./bulk-update-user-request')
  var user = require('./api-user')
  var validate = validator(bulkUpdateReq, {
    schemas: {
      'api-user': user
    }
  })

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
  var updateSubReq = require('./update-subscription-request')
  var validate = validator(updateSubReq)

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
  var trackReq = require('./api-user-update-request')
  var validate = validator(trackReq)

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
