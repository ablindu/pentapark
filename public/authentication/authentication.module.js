(function () {
  angular
    .module('authentication', [])
    .config(authConfig);

  function configSetup($stateProvider) {
    $stateProvider
    .state('authentication',{
        url:'/',
        controller: 'AuthenticationController',
        controllerAs: 'authentication',
        templateUrl:'public/app/authentication/partials/authentication'
    })
  }


})();
