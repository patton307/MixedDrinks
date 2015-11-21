var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var DrinkCollection = require('./collection');
var CollectionView = require('./CollectionView');

module.exports = Backbone.View.extend({
  events: {
    'click #submit': 'onLogin'
  },
  onLogin: function() {
    var drinkCollection = new DrinkCollection();
    drinkCollection.fetch().then(function(data) {
      var list = new CollectionView();
    });
  },
  initialize: function () {
  },
  template: _.template(tmpl.login),
  render: function () {
    var markup = this.template({});
    this.$el.html(markup);
    return this;
  }
});
