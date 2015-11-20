var $ = require('jquery');
var layoutView = require('./layoutView');
var Router = require('./routes');
var Backbone = require('backbone');


$(function () {
  new layoutView();
  new Router();
  Backbone.history.start();
});
