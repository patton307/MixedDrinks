var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var headerView = require('./headerView');
var DrinkCollection = require('./collection');
var CollectionView = require('./collectionView');
var LoginView = require('./loginView');
var FormView = require('./formView');
var HeaderView = require('./headerView');
var layoutView = require('./layoutView');
<<<<<<< HEAD
var ProfileView = require('./profileView');
var UserView = require('./userView');

=======
var UserView = require('./userView');
var UserCollection = require('./userCollection');
var UserCollectionView = require('./userCollectionView');
>>>>>>> 58ea165f9180b20e3cd1451e5878e5c251cc28fa

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
    $('.content').find('article').remove();
    var headerHTML = new HeaderView();
    $('#layoutView').html(headerHTML.render().el);
    var profileHTML = new ProfileView();
    $('#layoutView').append(profileHTML.render().el);


  },
  onHomePage: function(){

  },
  loginPage: function(){
    var loginHTML = new LoginView();
    $('#layoutView').append(loginHTML.render().el);
    // new layoutView();

  }




});
