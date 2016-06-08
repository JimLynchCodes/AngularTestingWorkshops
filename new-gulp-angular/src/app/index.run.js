(function() {
  'use strict';

  angular
    .module('projName')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
