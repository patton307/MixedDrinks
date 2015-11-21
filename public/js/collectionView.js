var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;
var DrinkView = require('./modelView');
var DrinkCollection = require('./collection');
var CollectionView = require('./collectionView');

module.exports = Backbone.View.extend({
  el: '#layoutView',
  initialize: function(){
    this.addAllDrinks();
    console.log('blue');
    var self = this;
    var drinkCollection = new DrinkCollection();
    drinkCollection.fetch().then(function(data){
      console.log(data);
      // var collectionView = new CollectionView({collection: drinkCollection});
    });
  },
  addOneDrink: function(drinkModel){
    var drinkView = new DrinkView({model: drinkModel});
    this.$el.append(drinkView.render().el);
    return this;
  },
  addAllDrinks: function(){
    _.each(this.collection.models, this.addOneDrink, this);
  }
});
