var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var tmpl = require('./templates');
var Drink = require('./model');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  tagName: 'section',
  className: 'drink',
  template: _.template(tmpl.recipe),
  events: {
    'click #like': 'onLike'
  },
  render: function(){
    
  },
  onLike: function(){
    console.log("liked");
  },
  initialize: function(){
    console.log('blue');
  },

});
