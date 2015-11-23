var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var DrinkCollection = require('./collection');
var CollectionView = require('./CollectionView');
var UserModel = require('./userModel');
var UserCollection = require('./UserCollection');

module.exports = Backbone.View.extend({
initialize: function () {
  },
  template: _.template(tmpl.login),
  render: function () {
    var markup = this.template({});
    this.$el.html(markup);
    return this;
  },
  events: {
    'click .createUser': 'onCreateUser',
    'click #submitCreate': 'onSubmitNewUser',
    'click #submit': 'onLogin',
  },

  onCreateUser: function() {
    $('.box').find('.password').removeClass('hidden');
    $('.box').find('.photo').removeClass('hidden');
    $('.box').find('#submitCreate').removeClass('hidden');
    $('.box').find('#cancel').removeClass('hidden');
    $('.box').find('#submit').addClass('hidden');
    $('.box').find('.createUser').addClass('hidden');
    $('.box').find('.loginButton').removeClass('hidden');
    $('.box').find('.confirmPassword').removeClass('hidden');
  },
  onSubmitNewUser: function(event) {
    event.preventDefault();
    var newUser = {
      username: $('.username').val(),
      password: $('.password').val(),
      image: $('.photo').val(),
    };
    console.log($('.password').val());
    if($('.initialPassword').val() === $('.confirmPassword').val()){
    $('.box').find('p').remove();
    $('.invalid').html("<p>Inccorect username or password</p>");
    $.ajax({
      method: 'POST',
      url: '/register-user',
      data: newUser,
      success: function() {
        console.log("register-user");
        window.location.hash = "home";
      }
    });
  }else{
    $('.box').append("<p class = 'invalid'>Inccorect username or password</p>");
  }
  },

  onLogin: function(event) {
    event.preventDefault();
    $('.box').find('p').remove();
    $('.invalid').html("<p>Inccorect username or password</p>");
    $.ajax({
      method: 'POST',
      url: '/login',
      data: {
        username: $('.username').val(),
        password: $('.password').val()
      },
      success: function() {
        window.location.hash = "home";
        console.log('orange');
      },
      failure: function() {
        console.log('blue');
      },
      error: function() {
        console.log('red');
        $('.box').append("<p class = 'invalid'>Inccorect username or password</p>");
      }
    });
  }
});
