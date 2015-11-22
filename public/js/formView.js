var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var DrinkCollection = require('./collection');

module.exports = Backbone.View.extend({
  el: '.form',
  events: {
    'click .send-stuff': 'onSubmitIngredients'
  },
  initialize: function () {
  },
  onSubmitIngredients: function(event){
    event.preventDefault();
    //console.log('SUBMIT INGREDIENTS BUTTON');
    var drinkCollection = new DrinkCollection();
    $('.content').html('');
    drinkCollection.fetch().then(function(data){
      for(var i = 0; i < data.length; i++){
        ////ASSIGNS NULL INGREDIENT TO EMPTY STRING //
        var combinedIngredients = '';
        if(data[i].ingredient1 === null){
          data[i].ingredient1 = '';
        }
        if(data[i].ingredient2 === null){
          data[i].ingredient2 = '';
        }
        if(data[i].ingredient3 === null){
          data[i].ingredient3 = '';
        }
        if(data[i].ingredient4 === null){
          data[i].ingredient4 = '';
        }
        if(data[i].ingredient5 === null){
          data[i].ingredient5 = '';
        }
        if(data[i].ingredient6 === null){
          data[i].ingredient6 = '';
        }
        if(data[i].ingredient7 === null){
          data[i].ingredient7 = '';
        }
        if(data[i].ingredient8 === null){
          data[i].ingredient8 = '';
        }
        if(data[i].ingredient9 === null){
          data[i].ingredient9 = '';
        }
        if(data[i].ingredient10 === null){
          data[i].ingredient10 = '';
        }
        if(data[i].ingredient11 === null){
          data[i].ingredient11 = '';
        }
        if(data[i].ingredient12 === null){
          data[i].ingredient12 = '';
        }

        var ingredient1 = data[i].ingredient1.toUpperCase();
        var ingredient2 = data[i].ingredient2.toUpperCase();
        var ingredient3 = data[i].ingredient3.toUpperCase();
        var ingredient4 = data[i].ingredient4.toUpperCase();
        var ingredient5 = data[i].ingredient5.toUpperCase();
        var ingredient6 = data[i].ingredient6.toUpperCase();
        var ingredient7 = data[i].ingredient7.toUpperCase();
        var ingredient8 = data[i].ingredient8.toUpperCase();
        var ingredient9 = data[i].ingredient9.toUpperCase();
        var ingredient10 = data[i].ingredient10.toUpperCase();
        var ingredient11 = data[i].ingredient11.toUpperCase();
        var ingredient12 = data[i].ingredient12.toUpperCase();
        combinedIngredients += ingredient1;
        combinedIngredients += ingredient2;
        combinedIngredients += ingredient3;
        combinedIngredients += ingredient4;
        combinedIngredients += ingredient5;
        combinedIngredients += ingredient6;
        combinedIngredients += ingredient7;
        combinedIngredients += ingredient8;
        combinedIngredients += ingredient9;
        combinedIngredients += ingredient10;
        combinedIngredients += ingredient11;
        combinedIngredients += ingredient12;

        /// SETS ALL UPPER CASE//
        var ingredientOneID = $('#ingredientOne').val().toUpperCase();
        var ingredientTwoID = $('#ingredientTwo').val().toUpperCase();
        var ingredientThreeID = $('#ingredientThree').val().toUpperCase();
        var ingredientFourID = $('#ingredientFour').val().toUpperCase();

        if(
          combinedIngredients.includes(ingredientOneID)
          &&combinedIngredients.includes(ingredientTwoID)
          &&combinedIngredients.includes(ingredientThreeID)
          &&combinedIngredients.includes(ingredientFourID)
        ){
          var template = _.template(tmpl.recipe);
          $('.content').append(template(data[i]));
        }
      }
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
