(function() {
  'use strict';

  angular
    .module('fizzbuzzService')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(FizzbuzzService, $log, $timeout) {
    var vm = this;

    $log.log('calling fizzbuzz');

     vm.callFizzBuzz = function() {

       $log.log('input text: ' + vm.inputText);
       vm.result = FizzbuzzService.fizzbuzz(vm.inputText);
       $log.log('result is: ' + vm.result);
     };

    // vm.callFizzBuzz();

  }
})();
