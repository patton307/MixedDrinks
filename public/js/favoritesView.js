var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var FavoriteCollection = require('./favoritesCollection')

module.exports = Backbone.View.extend({
  el: '#layoutView',
  initialize: function(){
    this.addAllFavorites();
  },
  addOneFavorite: function(drinkModel){
    var favoriteView = new ({model: favoriteModel});
    this.$el.append(favoriteView.render().el);
    return this;
  },
  addAllFavorites: function(){
  //  console.log('orange');
    _.each(this.collection.models, this.addOneFavorite, this);

  }
});
