var Backbone = require('backbone');
var DrinkModel = require('./model');

module.exports = Backbone.Collection.extend({
  url: '/drinks',
  model: DrinkModel,
  initialize: function() {
  }
});
