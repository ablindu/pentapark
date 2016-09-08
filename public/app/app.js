(function () {
'use strict'
  //angular.module('pentapark'); // getter
  angular
    .module('pentapark', [
      'ui.router',
      'employee',
      'admin'
    ]) // setter
    .config(configSetup);

  function configSetup($locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  }


})();
