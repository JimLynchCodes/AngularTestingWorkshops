(function() {
  'use strict';

  angular
    .module('asyncUnitTest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
