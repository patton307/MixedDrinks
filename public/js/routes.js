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
var ProfileView = require('./profileView');
var UserView = require('./userView');


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
    new HeaderView();
    var userHTML = new UserView();
    $('#layoutView').append(userHTML.render().el);

  },
  profilePage: function(){
    console.log("profile page");
    $('#layoutView').find('.drinkform').remove();
    var headerHTML = new HeaderView();
    $('#layoutView').html(headerHTML.render().el);
    var profileHTML = new ProfileView();
    $('#layoutView').append(profileHTML.render().el);


  },
  onHomePage: function(){

  },
  loginPage: function(){
    console.log("login page");
    var loginHTML = new LoginView();
    $('#layoutView').append(loginHTML.render().el);
    // new layoutView();
  }




});
