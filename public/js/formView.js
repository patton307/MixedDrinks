var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var DrinkCollection = require('./collection');
var DrinkCollectionView = require('./collectionView');

module.exports = Backbone.View.extend({
  el: '.form',
  events: {
    'click .send-stuff': 'onSubmitIngredients'
  },
  initialize: function () {
  },
  onSubmitIngredients: function(event){
    event.preventDefault();
    /// SETS ALL UPPER CASE//
    var ingredientOneID = $('#ingredientOne').val().toUpperCase();
    var ingredientTwoID = $('#ingredientTwo').val().toUpperCase();
    var ingredientThreeID = $('#ingredientThree').val().toUpperCase();
    var ingredientFourID = $('#ingredientFour').val().toUpperCase();

    var ingredientArray = [
      ingredientOneID,
      ingredientTwoID,
      ingredientThreeID,
      ingredientFourID
    ];

    var drinkCollection = new DrinkCollection();
    drinkCollection.fetch().then(function(data) {
      var newData = [];
        for (var i = 0; i < data.length; i++) {
          for(var prop in data[i]){
            if(data[i][prop] == null){
              data[i][prop] = "";
            }
          }
        }
        new DrinkCollectionView({collection: drinkCollection});
    });
  },
  template: _.template(tmpl.form),
  render: function () {
    var markup = this.template({});
    this.$el.html(markup);
    return this;
  }
});
