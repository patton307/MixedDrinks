var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var tmpl = require('./templates');
Backbone.$ = $;
var FavoriteModel = require('./addFav');

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
    var newFav = new FavoriteModel(this.model);
    newFav.save();
    console.log(this.model);
  },
  initialize: function(){
    //console.log('blue');
  },

});
