var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var DrinkCollection = require('./collection');
var CollectionView = require('./collectionView');
var LoginView = require('./loginView');
var FormView = require('./formView');

module.exports = Backbone.View.extend({
  el: '#layoutView',
  initialize: function(){
    var self = this;
    var loginHTML = new LoginView();
    var formHTML = new FormView();
    var drinkCollection = new DrinkCollection();
    drinkCollection.fetch().then(function(data){
      console.log(data.data[1001].name);
      var collectionView = new CollectionView({collection: drinkCollection});
      self.$el.html(loginHTML.render().el);
      self.$el.append(formHTML.render().el);
    });
  },
});
