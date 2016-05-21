(function() {
  'use-strict'

  angular.module('fizzbuzzService')
  .service('FizzbuzzService', FizzbuzzService);

  function FizzbuzzService($log) {
    var self = this;
    $log.log('fizzbuzz service created.');

    self.fizzbuzz = function(input) {

      if (input === undefined) {
        return 'Please pass in an input number to the fizzbuzz method.';
      }

      if (input == 3) {
        return 'buzz';
      }

      $log.log('fizzbuzz called.');
      return input;
    }

  }


})();
