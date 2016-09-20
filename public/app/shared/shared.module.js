(function () {
  angular
    .module('shared', [])
    .config(configSetup);

  function configSetup($stateProvider) {
    $stateProvider
    .state('shared',{
        url:'/',
        abstract: true,
        controller:'SharedController',
        controllerAs: 'shared',
        templateUrl:'public/app/shared/partials/shared'
    })
  }


})();
