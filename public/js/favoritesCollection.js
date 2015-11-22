var Backbone = require('backbone');
var DrinkModel = require('./model');
var FavoritesModel = require('./favoritesModel');

module.exports = Backbone.Collection.extend({
  url: '/favorites',
  model: FavoritesModel,
  initialize: function() {

  }
});
