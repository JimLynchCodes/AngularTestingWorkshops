(function() {
  'use strict';

  angular
    .module('mouseHoverLightbulb')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    
  }

})();
