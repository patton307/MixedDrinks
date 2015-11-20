var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var DrinkCollection = require('./collection');
var CollectionView = require('./collectionView');

module.exports = Backbone.View.extend({
  el: '#layoutView',
  initialize: function(){
    var drinkCollection = new DrinkCollection();
    drinkCollection.fetch().then(function(data){
      $('body').html(data.data.description);
      console.log(data.data[1001].name);
      var collectionView = new CollectionView({collection: drinkCollection});

    });
  },
});
