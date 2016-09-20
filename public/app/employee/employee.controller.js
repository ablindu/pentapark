(function() {
  angular
    .module('employee')
    .controller('EmployeeController', EmployeeController);

  function EmployeeController($http) {
    var employee = this;

    employee.$onInit = activate;
    employee.hello = '';
    
    function activate() {
      console.log('activating employee controller');
      $http
        .get('http://localhost:3030/users')
        .then(function(data) {
          employee.hello = data.data.message;
        });
    }
  }
})();
