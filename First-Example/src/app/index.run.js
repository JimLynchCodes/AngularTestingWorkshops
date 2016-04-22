(function() {
  'use strict';

  angular
    .module('angularTests')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
