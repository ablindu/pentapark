(function () {
  angular
    .module('employee')
    .controller('EmployeeController',EmployeeController);

  function EmployeeController() {
   var employee = this;

   employee.test = 'test';
   employee.$oninit= activate;
   employee.hello='';

   function activate(){

     $http.get('http://localhost:3030/users')
     .then(function(data){
      employee.hello= data.data.message;
     })
   }


  }


})();
