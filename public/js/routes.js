var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

module.exports = Backbone.Router.extend ({
  routes: {
    '': 'loginPage',
    'profile': 'userPage',

  },
  initialize: function(){

  },
  loginPage: function(){
    console.log();
  },
  userPage: function(){

  }

});
