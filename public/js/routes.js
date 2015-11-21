
var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var headerView = require('./headerView');
var LoginView = require('./loginView');
var CollectionView = require('./collectionView');

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
    var profileHTML = new CollectionView();
    $('#layoutView').html(headerHTML.render().el);
    $('.content').html(profileHTML.render().el);
    this.onHomePage();
  },
  profilePage: function(){
    console.log("profile page");


  },
  onHomePage: function(){
    var self = this;
    var headerHTML = new HeaderView();
    var loginHTML = new LoginView();
    var formHTML = new FormView();
    var drinkCollection = new DrinkCollection();
    drinkCollection.fetch().then(function(data){
      self.$el.html(loginHTML.render().el);
      self.$el.append(formHTML.render().el);
      var collectionView = new CollectionView({collection: drinkCollection});
  });
  },
  loginPage: function(){
    console.log("login page");
    var loginHTML = new LoginView();
    $('#layoutView').html(loginHTML.render().el);
    // this.destroy();
  }




});
