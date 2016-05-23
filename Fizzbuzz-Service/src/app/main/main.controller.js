(function() {
  'use strict';

  angular
    .module('fizzbuzzService')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(FizzbuzzService, $log, $timeout) {
    var vm = this;

    $log.log('calling fizzbuzz');

    $timeout(function() {
      vm.callFizzBuzz();
    });

    vm.callFizzBuzz = function() {
      vm.result = FizzbuzzService.fizzbuzz();

    }

    $log.log('result is: ' + vm.result);
  }
})();
