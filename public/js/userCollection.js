var Backbone = require('backbone');
var DrinkModel = require('./model');

module.exports = Backbone.Model.extend({
  url: '/users',
  initialize: function() {
    //console.log(this.url);
  }
});
