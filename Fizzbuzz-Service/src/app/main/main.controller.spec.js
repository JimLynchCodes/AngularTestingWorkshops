(function() {
  'use strict';

  describe('MainController', function(){
    var controller;

    beforeEach(module('fizzbuzzService'));
    beforeEach(inject(function($controller) {
      var scope = {};
     controller = $controller('MainController', {$scope: scope})
    }))


    it('should be defined', function () {
      expect(controller).toBeDefined();
    });

    it('should not have vm.result defined ', function () {
      expect(controller.result).not.toBeDefined();
    });

    it('should have vm.result defined after calling callFizzBuzz', function () {
      controller.callFizzBuzz();
      expect(controller.result).toBeDefined();
    });

    it('should do stuff', function () {

    })


  });
})();
