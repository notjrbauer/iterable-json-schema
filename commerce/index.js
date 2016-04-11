'use strict'

var validator = require('is-my-json-valid')

var common = require('../common')
var updateCartReq = require('./update-cart')
var trackPurchaseReq = require('./track-purchase')

var commerceItem = common.commerceItem
var updateUser = common.updateUser

var dependencies = {
  'update-user': updateUser,
  'commerce-item': commerceItem
}

exports.updateCart = validator(updateCartReq, {
  schemas: dependencies
})

exports.trackPurchase = validator(trackPurchaseReq, {
  schemas: dependencies
})
