
var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var headerView = require('./headerView');
var LoginView = require('./loginView');
var FormView = require('./formView');

module.exports = Backbone.Router.extend ({
  routes: {

    'home': 'homePage',
    '': 'loginPage',
    'profile': 'profilePage',


  },
  // initialize: function(options){
  //     // if(!this.layout)
  //     //  {this.layout = options.layout};
  // },
  homePage: function(){
    console.log("home page");
    var headerHTML = new headerView();
    $('#layoutView').html(headerHTML.render().el);
    var formHTML = new FormView();
    $('#layoutView').append(formHTML.render().el);

  },
  profilePage: function(){
    console.log("profile page");
    var headerHTML = new headerView();
    $('#layoutView').html(headerHTML.render().el);

  },
  loginPage: function(){
    console.log("login page");
    var loginHTML = new LoginView();
    $('#layoutView').html(loginHTML.render().el);

  }




});
