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
    var self = this;
    var userCollection = new UserCollection();
    userCollection.fetch().then(function(data) {
      var template = _.template(tmpl.sideUser);
      console.log(tmpl.sideUser);
      for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        var displayer = template(data[i]);
        $('#side').append(displayer);
      }
    });
    var headerHTML = new HeaderView();
    var formHTML = new FormView();
    self.$el.html(headerHTML.render().el);
    self.$el.append(formHTML.render().el);



  }

});
