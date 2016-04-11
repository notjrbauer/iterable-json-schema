'use strict'

var validator = require('is-my-json-valid')

var common = require('../common')
var targetReq = require('./target')

var attachmentEntry = common.attachmentEntry

var dependencies = {
  'attachment-entry': attachmentEntry
}

exports.target = validator(targetReq, {
  schemas: dependencies
})
