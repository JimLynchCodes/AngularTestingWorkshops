(function () {
  'use-strict'

  angular.module('fizzbuzzService')
    .service('FizzbuzzService', FizzbuzzService);

  function FizzbuzzService($log) {
    var self = this;
    $log.log('fizzbuzz service created.');


    self.fizzbuzz = function (input) {

      $log.log('fizzbuzz called with: ' + input + ' of type: ' + typeof input);




      
      return null;
    }




  }


})();
