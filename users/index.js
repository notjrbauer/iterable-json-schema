var validator = require('is-my-json-valid')

var bulkUpdateReq = require('./bulk-update')
var updateUserReq = require('./update-user')
var updateEmailReq = require('./update-email')
var disableDeviceReq = require('./disable-device')
var updateSubReq = require('./update-subscription')

var common = require('../common')
var apiUser = common.apiUser

var dependencies = {
  'api-user': apiUser
}

exports.updateUser = validator(updateUserReq)
exports.updateEmail = validator(updateEmailReq)
exports.disableDevice = validator(disableDeviceReq)
exports.updateSubscription = validator(updateSubReq)

exports.bulkUpdate = validator(bulkUpdateReq, {
  schemas: dependencies
})

