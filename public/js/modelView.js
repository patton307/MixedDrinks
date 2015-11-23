var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var tmpl = require('./templates');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  tagName: 'article',
  template: _.template(tmpl.recipe),
  events: {
    'click .like': 'onLike'
  },
  render: function(){
    var markup = this.template(this.model.toJSON());
     this.$el.html(markup);
     return this;
  },
  onLike: function(){
    console.log("liked");
  },
  initialize: function(){
    //console.log('blue');
  },

});
