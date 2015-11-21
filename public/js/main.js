var $ = require('jquery');
var layoutView = require('./layoutView');
var collectionView = require('./collectionView');
var Router = require('./routes');
var Backbone = require('backbone');


$(function () {

  new Router();
  Backbone.history.start();
});
