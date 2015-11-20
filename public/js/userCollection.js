var Backbone = require('backbone');
var DrinkModel = require('./model');

module.exports = Backbone.Model.extend({
  url: 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/item?api_key=9c8df2d8-47f8-41ba-b940-c073b02549cb',
  initialize: function() {
    //console.log(this.url);
  }
});
