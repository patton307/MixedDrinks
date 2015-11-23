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
var UserCollection = require('./userCollection');
var UserCollectionView = require('./userCollectionView');
var FavoriteCollection = require('./favoritesCollection');
var FavoritesCollectionView = require('./favoritesView');


module.exports = Backbone.Router.extend ({
 routes: {
   '': 'loginPage',
   'home': 'homePage',
   'profile': 'profilePage',
 },

 homePage: function(){

    new layoutView();

    $('#layoutView').find('.box').remove();
    $('#layoutView').find('.toTheLeft').addClass('hidden');
    $('#layoutView').find('.profile').remove();
   },


  profilePage: function(){
    var favorites = new FavoriteCollection();
    favorites.fetch().then(function(data){
      console.log(data);
      console.log('MODELS', favorites);
      new FavoritesCollectionView({collection: favorites});
    });
    $('#side').html("");
    var users = new UserCollection();
    users.fetch().then(function() {
      new UserCollectionView({collection: users});
    });
    $('#layoutView').find('.drinkform').remove();
    $('#layoutView').find('#nav').remove();
      var headerHTML = new HeaderView();
      $('.headerbox').html(headerHTML.render().el);
      var profileHTML = new ProfileView();
      $('.profilebox').html(profileHTML.render().el);
      $('.content').find('article').remove();


    // var userHTML = new UserCollectionView();
    // $('#side').html(userHTML.render().el);

    // var favorites = new FavoriteCollection();
    // favorites.fetch().then(function(data){
    //   console.log('favorites data', data[0]);
    //   new FavoritesCollectionView({collection: favorites});

    // });
  },
 loginPage: function(){
   var loginHTML = new LoginView();
   $('#layoutView').html(loginHTML.render().el);
 }
});
