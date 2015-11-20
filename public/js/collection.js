var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  url: 'http://addb.absolutdrinks.com/drinks/?apiKey=fa0ea8ba586c4f70b9397e6e64613fa9&start=25&pageSize=3000',
  initialize: function() {
    //console.log(this.url);
  }
});
