(function () {
  'use-strict'

  angular.module('fizzbuzzService')
    .service('FizzbuzzService', FizzbuzzService);

  function FizzbuzzService($log) {
    var self = this;
    $log.log('fizzbuzz service created.');


    self.fizzbuzz = function (input) {

      $log.log('fizzbuzz called with: ' + input + ' of type: ' + typeof input);


      if (input == 0) {
        return '--'
      }

      if (input % 3 == 0 && input % 5 ==0) {
        return "fizzbuzz"
      }

      if (input % 3 == 0) {
        return "fizz";

      }

      if (input % 5 == 0) {
        return "buzz"
      }


      if (input < 0 || (Math.ceil(parseFloat(input)) != input)) {
        return 'Sorry, please enter a positive number!';
      }

      return input.toString();

    }
  }


})();
