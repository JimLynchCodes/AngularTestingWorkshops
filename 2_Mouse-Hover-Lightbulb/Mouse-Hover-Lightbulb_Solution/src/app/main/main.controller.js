(function() {
  'use strict';

  angular
    .module('mouseHoverLightbulb')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.imgSrc = 'assets/sample-images/lightbulb-off.jpg';
    vm.litUp = false;

    vm.buttonHovered = function() {
      vm.imgSrc = 'assets/sample-images/lightbulb-on.jpg';
      vm.litUp = true;
    }

    vm.buttonMouseOut = function() {
      vm.imgSrc = 'assets/sample-images/lightbulb-off.jpg';
      vm.litUp = false;
    }

  }
})();
