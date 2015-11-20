var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var DrinkView = require('./modelView');

module.exports = Backbone.View.extend({
  el: '.content',
  initialize: function(){
    this.addAllDrinks();
  },
  addOneDrink: function(drinkModel){
    var drinkView = new DrinkView({model: drinkModel});
    console.log(drinkView);
     this.$el.append(drinkView.render().el);
  },
  addAllDrinks: function(){
    _.each(this.collection.models, this.addOne, this);
  }
});
