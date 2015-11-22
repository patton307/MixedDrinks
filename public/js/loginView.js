var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var DrinkCollection = require('./collection');
var CollectionView = require('./CollectionView');

module.exports = Backbone.View.extend({
initialize: function () {
  },
  template: _.template(tmpl.login),
  render: function () {
    var markup = this.template({});
    this.$el.html(markup);
    return this;
  },
  events: {
    'click .createUser': 'onCreateUser'
  },
  onCreateUser: function() {
    $('.box').find('.password').removeClass('hidden');
    $('.box').find('.photo').removeClass('hidden');
  }
});
