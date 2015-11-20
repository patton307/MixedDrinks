var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  tagName: 'section',
  className: 'drink',
  initialize: function(){
    console.log('blue');
  },
  
});
