var validator = require('is-my-json-valid')

var common = require('../common')
var subscribeReq = require('./subscribe')
var unsubscribeReq = require('./unsubscribe')

var apiUser = common.apiUser
var dependencies = {
  'api-user': apiUser
}

exports.subscribe = validator(unsubscribeReq, {
  schemas: dependencies
})

exports.unsubscribe = validator(unsubscribeReq, {
  schemas: dependencies
})
