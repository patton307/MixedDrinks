var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var DrinkCollection = require('./collection');
var CollectionView = require('./collectionView');
var LoginView = require('./loginView');
var FormView = require('./formView');
var HeaderView = require('./headerView');
var layoutView = require('./layoutView');

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
    new layoutView();
    $('#layoutView').find('.box').remove();
    new FormView();
  },
  profilePage: function(){
    console.log("profile page");
    var headerHTML = new headerView();
    $('#layoutView').html(headerHTML.render().el);
    // $('#layoutView').find('.drinkform').remove();

  },
  onHomePage: function(){

  },
  loginPage: function(){
    console.log("login page");
    var loginHTML = new LoginView();
    $('#layoutView').html(loginHTML.render().el);

  }




});
