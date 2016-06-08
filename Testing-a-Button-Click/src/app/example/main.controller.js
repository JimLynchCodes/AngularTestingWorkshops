(function () {
  'use strict';

  angular
       .module('testingButtonClick')
       .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log) {
    $log.log("CalculatorController was created!");
    var vm = this;
    vm.buttonClicked = false;
    vm.totalButtonClicks = 0;

    vm.onButtonClicked = function () {
      vm.buttonClicked = true;
      vm.totalButtonClicks ++;
      $log.log("Button was clicked!");
    }

  }

})();
