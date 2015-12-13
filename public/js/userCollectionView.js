var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var UserView = require('./userView');


module.exports = Backbone.View.extend({
  el: '#side',
  initialize: function(){
    this.addAllUsers();
  },
  addUser: function(userModel) {
    var userView = new UserView({model: userModel});
    this.$el.append(userView.render().el);
  },
  addAllUsers: function() {
    _.each(this.collection.models, this.addUser, this);
  },
});
