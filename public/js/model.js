var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

module.exports = Backbone.Model.extend({
  urlRoot: '/drinks',
  initialize: function() {
    console.log('dog');
  }
});
