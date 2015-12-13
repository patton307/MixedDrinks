var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var tmpl = require('./templates');
var User = require('./favoritesModel');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  // el: '#side',
  tagName: 'div',
  template: _.template(tmpl.favorites),
  events: {
  },
  render: function() {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
  initialize: function() {
  }
});
