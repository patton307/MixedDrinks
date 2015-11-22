var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var DrinkCollection = require('./collection');
var CollectionView = require('./collectionView');
var LoginView = require('./loginView');
var FormView = require('./formView');
var HeaderView = require('./headerView');
var ProfileView = require('./profileView');
var UserView = require('./userView');
var UserCollection = require('./userCollection');
var UserCollectionView = require('./UserCollectionView');
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  el: '#layoutView',
  initialize: function(){
    var headerHTML = new HeaderView();
    var formHTML = new FormView();
    this.$el.append(headerHTML.render().el);
    this.$el.append(formHTML.render().el);

  }

});
