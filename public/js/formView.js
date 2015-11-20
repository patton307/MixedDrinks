var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  events: {
    'click .send-stuff': 'onSubmitIngredients'
  },
  initialize: function () {
  },
  onSubmitIngredients: function(event){
    event.preventDefault();
    console.log('SUBMIT INGREDIENTS BUTTON');

    /// FILTER THROUGH DATA TO FIND MATCHING DRINKS
  },
  template: _.template(tmpl.form),
  render: function () {
    var markup = this.template({});
    this.$el.html(markup);
    return this;
  }
});
