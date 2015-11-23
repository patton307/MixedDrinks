var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

module.exports = Backbone.Model.extend({
  urlRoot: '/users',
  defaults: {
    username: "Rando",
    password: "1234",
    image: "https://www.teachforamerica.org/sites/default/files/styles/large/public/thumbnails/image/headshot.png?itok=EW2-dSgB",
  },
  initialize: function() {

  }
});
