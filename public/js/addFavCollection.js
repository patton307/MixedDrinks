var Backbone = require('backbone');
var DrinkModel = require('./model');
var AddFav = require('./addFav');

module.exports = Backbone.Collection.extend({
  url: '/add-favorite',
  model: AddFav,
  initialize: function() {

  }
});
