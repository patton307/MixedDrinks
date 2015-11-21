var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var UserView = require('./userView');
var UserModel = require('./userModel');
var UserCollection = require('./userCollection');


module.exports = Backbone.View.extend({
  el: '#side',
  initialize: function(){
    this.addAllUsers();
  },
  addOneUser: function(userModel){
    var userView = new UserView({model: userModel});
    this.$el.append(userView.render().el);
    //console.log(this);
  },
  addAllUsers: function(){
    var userCollection = new UserCollection();
    userCollection.fetch().then(function(data) {
      var template = _.template(tmpl.sideUser);
      console.log(tmpl.sideUser);
      for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        var displayer = template(data[i]);
        $('#side').append(displayer);
      }
    });
  }
});
