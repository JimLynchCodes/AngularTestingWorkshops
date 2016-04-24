/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('asyncUnitTest')
    .constant('malarkey', malarkey)
    .constant('moment', moment);

})();
