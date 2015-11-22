var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var DrinkCollection = require('./collection');
var CollectionView = require('./collectionView');
var LoginView = require('./loginView');
var FormView = require('./formView');
var HeaderView = require('./headerView');
var DrinkView = require('./modelView');


module.exports = Backbone.View.extend({
  el: '#layoutView',
  initialize: function(){
    this.addAllDrinks();
  },
  addOneDrink: function(drinkModel){
    var drinkView = new DrinkView({model: drinkModel});
    this.$el.append(drinkView.render().el);
    console.log(this);
    return this;
  },
  addAllDrinks: function(){
    console.log('this', this);
    _.each(this.collection.models, this.addOneDrink, this);
  }
});
