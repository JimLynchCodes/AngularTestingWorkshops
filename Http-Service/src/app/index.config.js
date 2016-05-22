(function() {
  'use strict';

  angular
    .module('httpTdd')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    
  }

})();
