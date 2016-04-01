'use strict';

const app = require('../app-data');

const signUp = (success, failure, data) => {
//Math.random
$.ajax({
  method: 'POST',
 //url: 'http://httpbin.org/post',
 url: app.api + 'sign-up',
 data,
  }).done(success)
  .fail(failure);
  // Math.random() > 0.5 ? success('in signUp') : failure(data);
};

const signIn = (success, failure, data) => {
//Math.random
$.ajax({
  method: 'POST',
 //url: 'http://httpbin.org/post',
 url: 'http://localhost:3000/sign-in',
 data,
  }).done(success)
  .fail(failure);
  // Math.random() > 0.5 ? success('in signUp') : failure(data);
};

const signOut= (success, failure) => {
//If (!app.user) means not set it is bad;
$.ajax({
  method: 'DELETE',
 //url: 'http://httpbin.org/post',
 url: app.api + '/sign-out/' + app.user.id,
 headers: {
   Authorization: 'Token token=' + app.user.token,
 }
  }).done(success)
  .fail(failure);
  // Math.random() > 0.5 ? success('in signUp') : failure(data);
};

module.exports = {
  signUp,
  signIn,
  signOut
};
