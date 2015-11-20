var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var DrinkView = require('./modelView');

module.exports = Backbone.View.extend({
  el: '#layoutView',
  initialize: function(){
    this.addAllDrinks();
    console.log('blue');
  },
  addOneDrink: function(drinkModel){
    var drinkView = new DrinkView({model: drinkModel});
    // this.$el.append(drinkView.render().el);
    return this;
  },
  addAllDrinks: function(){
    _.each(this.collection.models, this.addOneDrink, this);
  }
});
