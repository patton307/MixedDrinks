var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var DrinkCollection = require('./collection');
var CollectionView = require('./collectionView');
var LoginView = require('./loginView');
var FormView = require('./formView');
var HeaderView = require('./headerView');

module.exports = Backbone.View.extend({
  el: '#layoutView',
  initialize: function(opts){
    var self = this;

    var headerHTML = new HeaderView();
    var loginHTML = new LoginView();
    var formHTML = new FormView();
    var drinkCollection = new DrinkCollection();
    console.log(drinkCollection.fetch());
    drinkCollection.fetch().then(function(data){
      console.log('blue');
      var collectionView = new CollectionView({collection: drinkCollection});
      self.$el.html(loginHTML.render().el);
      self.$el.append(formHTML.render().el);

    });
  },
});
