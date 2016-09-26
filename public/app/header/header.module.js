(function () {
  angular
    .module('header', [])
    .config(configSetup);

  function configSetup($stateProvider) {
    $stateProvider
    .state('shared.header',{
        url: '/header',
        controller: 'HeaderController',
        controllerAs: 'header',
        templateUrl:'public/app/header/partials/header'
    });
  }


})();
