var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var tmpl = require('./templates');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  tagName: 'li',
  className: 'userinfo',
  template: _.template(tmpl.sideUser),
  events: {
    'click img': 'onProfile'
  },
  render: function() {
    var markup = this.template(this.model.toJSON());
     this.$el.html(markup);
     return this;
  },
  onProfile: function() {
    console.log("clicked prof");
  },
  initialize: function() {
    console.log('dog');
  }
});
