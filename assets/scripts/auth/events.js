'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const authApi = require('./api');
const authUi = require('./ui');

const addHandlers = () => {
//$('#sign-up')liks back to the form it is calling the signup id trailing
//.on is a method that means on something like the event
//('submit') is the event the functin happens
  $('#sign-up').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signUp(authUi.success, authUi.failure, data);
  });
  $('#sign-in').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
  });
  $('#sign-out').on('submit', function (event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure, data);
  });
//inprogress - need to add form-field
  ///$('#change-password').on('submit', function (event) {
    //event.preventDefault();
    //authApi.signOut(authUi.signOutSuccess, authUi.failure, data);
  //});

};

module.exports = {
  addHandlers,
};
