(function () {
'use strict'
  //angular.module('pentapark'); // getter
  angular
    .module('pentapark', [
      'ui.router',
      'shared',
      'authentication',
      'employee',
      'admin'
    ]) // setter
    .config(configSetup);

  function configSetup($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  }


})();
