(function () {
  angular
    .module('shared')
    .controller('SharedController', SharedController);

  function SharedController() {
   var shared = this;

   shared.test = 'SharedController Test';


  }


})();
