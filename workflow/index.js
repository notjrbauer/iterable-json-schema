'use strict'

var validator = require('is-my-json-valid')

var triggerReq = require('./trigger')

exports.trigger = validator(triggerReq)
