(function() {
  'use strict';

  angular
    .module('testingButtonClick')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
