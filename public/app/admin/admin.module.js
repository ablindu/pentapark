(function () {
  angular
    .module('admin', [])
    .config(configSetup);

  function configSetup($stateProvider) {
    $stateProvider
    .state('shared.admin',{
        url:'/admin',
        controller: 'AdminController',
        controllerAs: 'admin',
        templateUrl:'public/app/admin/partials/admin.html'
    })
  }


})();
