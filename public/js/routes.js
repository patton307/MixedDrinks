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
var ProfileView = require('./profileView');
var UserView = require('./userView');
var UserCollection = require('./userCollection');
var UserCollectionView = require('./userCollectionView');


module.exports = Backbone.Router.extend ({
  routes: {
    'home': 'homePage',
    '': 'loginPage',
    'profile': 'profilePage',
  },
  homePage: function(){

    // $('#layoutView').find('.toTheLeft').removeClass('hidden');
     console.log("home page");
     var users = new UserCollection();
     users.fetch().then(function() {
       new UserCollectionView({collection: users});
       new layoutView();
       $('#layoutView').find('.box').remove();

     });
   },
  //  profilePage: function(){
  //   //  $('#layoutView').find('.toTheLeft').removeClass('hidden');
  //   //   console.log("profile page");
  //   //   var headerHTML = new HeaderView();
  //   //   $('#layoutView').find('section').remove();
  //   //   var profileHTML = new ProfileView();
  //   //   $('#layoutView').append(profileHTML.render().el);
   //
   //
  //  },
  loginPage: function(){
    var loginHTML = new LoginView();
    $('#layoutView').append(loginHTML.render().el);


  }




});
