/**
 * Created by jameslynch on 4/19/16.
 */
(function () {
     'use strict';

     angular
          .module('asyncUnitTest')
          .controller('CalculatorController', CalculatorController);

     /** @ngInject */
     function CalculatorController($log) {
          $log.log("CalculatorController was created!");
          var vm = this;
          vm.buttonClicked = false;

          vm.onButtonClicked = function () {
               vm.buttonClicked = true;
               $log.log("Button was clicked!");
          }


     }


})();
