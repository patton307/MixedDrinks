var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://addb.absolutdrinks.com/drinks/?apiKey=fa0ea8ba586c4f70b9397e6e64613fa9&start=25&pageSize=35',
  initialize: function() {
    
  }
});
