var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var UserView = require('./userView');
var UserModel = require('./userModel');
var UserCollection = require('./userCollection');
var tmpl = require('./templates');


module.exports = Backbone.View.extend({
  el: '#side',
  initialize: function(){
    // this.addAllUsers();
  },
  addOneUser: function(userModel){
    var userView = new UserView({model: userModel});
    this.$el.append(userView.render().el);
  },
  addAllUsers: function(){
  
  }
});
