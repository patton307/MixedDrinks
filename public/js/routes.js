
var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var headerView = require('./headerView');
var CollectionView = require('./collectionView');
var DrinkCollection = require('./collection');
var LoginView = require('./loginView');

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
    //console.log("home junk");
  //  var headerHTML = new headerView();
    // $('#layoutView').html(headerHTML.render().el);

  },
  profilePage: function(){
    console.log("profile page");


  },
  loginPage: function(){
    var loginHTML = new LoginView();
    $('#layoutView').html(loginHTML.render().el);
  }




});
