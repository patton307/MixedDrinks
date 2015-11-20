
var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

module.exports = Backbone.Router.extend ({
  routes: {
    'home': 'homePage',
    'submit': 'homePage',
    'profile': 'profilePage',

  },
  initialize: function(options){
      // if(!this.layout)
      //  {this.layout = options.layout};
  },
  homePage: function(){
    console.log("hey");
  },
  profilePage: function(){
    console.log("meow profile page");
  }

});
