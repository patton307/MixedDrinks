var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var UserCollection = require('./userCollection');
var UserView = require('./userView');
var UserModel = require('./userModel');


module.exports = Backbone.View.extend({
  el: '#side',
  initialize: function(){
    this.addAllUsers();
  },
  addOneDrink: function(drinkModel){
    var userView = new UserView({model: UserModel});
    this.$el.append(userView.render().el);
    return this;
    console.log(this);
  },
  addAllUsers: function(){
  //  console.log('orange');
    _.each(this.collection.models, this.addOneUser, this);
  }
});
