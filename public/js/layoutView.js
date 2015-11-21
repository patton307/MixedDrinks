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

module.exports = Backbone.View.extend({
  el: '#layoutView',
  initialize: function(){
    var self = this;
    var headerHTML = new HeaderView();
    var formHTML = new FormView();
    self.$el.html(headerHTML.render().el);
    self.$el.append(formHTML.render().el);



  }

});
