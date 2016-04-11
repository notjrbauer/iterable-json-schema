var validator = require('is-my-json-valid')

var targetReq = require('./target')

exports.target = validator(targetReq)


