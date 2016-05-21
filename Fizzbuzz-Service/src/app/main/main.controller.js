(function() {
  'use strict';

  angular
    .module('fizzbuzzService')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(FizzbuzzService, $log) {
    var vm = this;

    $log.log('calling fizzbuzz');
    var result = FizzbuzzService.fizzbuzz();

    $log.log('result is: ' + result);
  }
})();
