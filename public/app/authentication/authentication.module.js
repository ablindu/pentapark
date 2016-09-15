(function() {
  'use strict';

  angular
    .module('authentication', [])
    .config(authConfig);

  function authConfig($stateProvider) {
    $stateProvider
    .state('authentication', {
      url: '/',
      // controller: 'AuthenticationController',
      // controllerAs: 'auth',
      templateUrl: 'public/app/authentication/partials/authentication'
    });
  }
}());
