var validator = require('is-my-json-valid')

var trackReq = require('./track')
var trackPushOpenReq = require('./track-push-open')
var trackConversionReq = require('./track-conversion')

exports.track = validator(trackReq)
exports.trackPushOpen = validator(trackPushOpenReq)
exports.trackConversion = validator(trackConversionReq)
