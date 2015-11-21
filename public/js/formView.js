var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var DrinkCollection = require('./collection');
var CollectionView = require('./collectionView');

module.exports = Backbone.View.extend({
  events: {
    'click .send-stuff': 'onSubmitIngredients'
  },
  initialize: function () {
  },
  onSubmitIngredients: function(event){
    event.preventDefault();
    console.log('SUBMIT INGREDIENTS BUTTON');
    var drinkCollection = new DrinkCollection();

    drinkCollection.fetch().then(function(data){
      for(var i = 0; i < data.length; i++){
        ////ASSIGNS NULL INGREDIENT TO EMPTY STRING //
        // console.log(data[i]);
        var combinedIngredients = '';
        if(data[i].ingredient1 === null){
          data[i].ingredient1 = '';
        };
        if(data[i].ingredient2 === null){
          data[i].ingredient2 = '';
        };
        var ingredient1 = data[i].ingredient1.toUpperCase();
        var ingredient2 = data[i].ingredient2.toUpperCase();
        combinedIngredients += ingredient1;
        combinedIngredients += ingredient2;

        /// SETS ALL UPPER CASE//
        var ingredientOneID = $('#ingredientOne').val().toUpperCase();
        var ingredientTwoID = $('#ingredientTwo').val().toUpperCase();

        if(combinedIngredients.includes(ingredientOneID)&&combinedIngredients.includes(ingredientTwoID)){
          console.log(data[i].name);
        }

      };
      // var collectionView = new CollectionView({collection: drinkCollection});
  });

    /// FILTER THROUGH DATA TO FIND MATCHING DRINKS
  },
  template: _.template(tmpl.form),
  render: function () {
    var markup = this.template({});
    this.$el.html(markup);
    return this;
  }
});
