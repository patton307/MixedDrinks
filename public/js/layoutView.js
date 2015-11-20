var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var DrinkCollection = require('./collection');
var CollectionView = require('./collectionView');
var LoginView = require('./loginView');
var HeaderView = require('./headerView');

module.exports = Backbone.View.extend({
  el: '#layoutView',
  initialize: function(){
    var self = this;
    var headerHTML = new HeaderView();
    var loginHTML = new LoginView();
    var drinkCollection = new DrinkCollection();
    drinkCollection.fetch().then(function(data){
      $('body').html(data.data.description);
      console.log(data.data[1001].name);
      var collectionView = new CollectionView({collection: drinkCollection});
    self.$el.html(loginHTML.render().el);
    self.$el.html(headerHTML.render().el);

    });

  },
});
