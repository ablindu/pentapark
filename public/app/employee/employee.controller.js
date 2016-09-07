(function () {
  angular
    .module('employee') 
    .controller('EmployeeController',EmployeeController);

  function EmployeeController() {
   var employee = this;

   employee.test = 'test';

   
  }


})();
