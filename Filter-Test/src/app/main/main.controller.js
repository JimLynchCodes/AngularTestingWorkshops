(function() {
  'use strict';

  angular
    .module('asyncUnitTest')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    //vm.creationDate = 1461103121397;
    //vm.showToastr = showToastr;

    activate();

    function activate() {
      //getWebDevTec();
      //$timeout(function() {
      //  vm.classAnimation = 'rubberBand';
      //}, 4000);
    }

    function showToastr() {


    }

    function getWebDevTec() {
      //vm.awesomeThings = webDevTec.getTec();
      //
      //angular.forEach(vm.awesomeThings, function(awesomeThing) {
      //  awesomeThing.rank = Math.random();
      //});
    }
  }
})();
