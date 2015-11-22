var Backbone = require('backbone');
var DrinkModel = require('./model');
var UserModel = require('./userModel');

module.exports = Backbone.Collection.extend({
  url: '/users',
  model: UserModel,
  initialize: function() {

  }
});
