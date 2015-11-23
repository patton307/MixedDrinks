var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var DrinkView = require('./modelView');


module.exports = Backbone.View.extend({
  el: '.drinkList',
  initialize: function(){
    this.addAllDrinks();
  },
  addOneDrink: function(drinkModel){
    var drinkView = new DrinkView({model: drinkModel});
    this.$el.append(drinkView.render().el);
  },
  addAllDrinks: function(){
    _.each(this.collection.models, this.addOneDrink, this);
  }
});
