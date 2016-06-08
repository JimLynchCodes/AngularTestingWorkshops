(function() {
  'use strict';

  angular
    .module('fizzbuzzService')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
