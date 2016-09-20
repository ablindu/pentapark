(function () {
  angular
    .module('employee', [])
    .config(configSetup);

  function configSetup($stateProvider) {
    $stateProvider
    .state('shared.employee',{
        url:'/employee',
        controller: 'EmployeeController',
        controllerAs: 'employee',
        templateUrl:'public/app/employee/partials/employee'
    })
  }


})();
