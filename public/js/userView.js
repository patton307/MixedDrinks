var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var tmpl = require('./templates');
var User = require('./userModel');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  tagName: 'div',
  className: 'user',
  template: _.template(tmpl.sideUser),
  events: {
    'click img': 'onProfile'
  },
  render: function() {
    var markup = this.template({});
    this.$el.html(markup);
    return this;
  },
  onProfile: function() {
    
  },
  initialize: function() {

  }
});
