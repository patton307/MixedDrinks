var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  url: 'https://tiny-tiny.herokuapp.com/collections/lynch/',
  initialize: function() {
    //console.log(this.url);
  }
});
