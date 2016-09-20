(function () {
  angular
    .module('shared', ['header'])
    .config(configSetup);

  function configSetup($stateProvider) {
    $stateProvider
    .state('shared', {
      abstract: true,
      url: '/app',
      controller: 'SharedController',
      controllerAs: 'shared',
      templateUrl: 'public/app/shared/partials/shared'
    });
  }


})();
