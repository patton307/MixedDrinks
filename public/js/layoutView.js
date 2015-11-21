var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var DrinkCollection = require('./collection');
var CollectionView = require('./collectionView');
var LoginView = require('./loginView');
var FormView = require('./formView');
var HeaderView = require('./headerView');
var UserCollection = require('./userCollection');
var UserCollectionView = require('./UserCollectionView');
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  el: '#layoutView',
  initialize: function(){
    var self = this;
    new UserCollectionView();
    var headerHTML = new HeaderView();
    var formHTML = new FormView();
    self.$el.append(headerHTML.render().el);
    self.$el.append(formHTML.render().el);

  }

});
