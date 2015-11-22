var Backbone = require('backbone');
var FavoritesModel = require('./favoritesModel');

module.exports = Backbone.Model.extend({
  url: '/favorites',
  initialize: function() {
    //console.log(this.url);
  }
});
