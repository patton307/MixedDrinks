var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var DrinkCollection = require('./collection');
var CollectionView = require('./collectionView');
var LoginView = require('./loginView');

module.exports = Backbone.View.extend({
  el: '#layoutView',
  initialize: function(){

    var self = this;
    var loginHTML = new LoginView();
    var drinkCollection = new DrinkCollection();
    drinkCollection.fetch().then(function(data){
      $('body').html(data.data.description);
      console.log(data.data[1001].description);
      var collectionView = new CollectionView({collection: drinkCollection});

    self.$el.html(loginHTML.render().el);
    });

  },
});
