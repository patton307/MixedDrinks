var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var FavoritesModel = require('./favoritesModel');
var FavoritesCollection = require('./favoritesCollection');
var FavoritesModelView = require('./favoritesModelView')
var tmpl = require('./templates');


module.exports = Backbone.View.extend({
  el: '#layoutView',
  initialize: function(){
    this.addAllFavorites();
  },
  addFavorite: function(favoriteModel) {
    var favoritesModelView = new FavoritesModelView({model: favoriteModel});
    console.log(favoritesModelView);
    this.$el.append(favoritesModelView.render().el);
    // console.log(this.$el.append(favoritesModelView.render().el));
  },
  addAllFavorites: function() {
    _.each(this.collection.models, this.addFavorite, this);
  },


});
