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

  },
  onProfile: function() {

  },
  initialize: function() {

  }
});
