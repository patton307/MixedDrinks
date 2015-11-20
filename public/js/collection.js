var Backbone = require('backbone');
var DrinkModel = require('./model');

module.exports = Backbone.Collection.extend({
  url: '/drinks',
  initialize: function() {
    console.log(this.url);
  },
  model: DrinkModel
});
