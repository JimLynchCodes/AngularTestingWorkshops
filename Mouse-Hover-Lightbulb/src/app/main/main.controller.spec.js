(function() {
  'use strict';

  describe('controllers', function(){
    var vm;
    var $controller

    beforeEach(module('mouseHoverLightbulb'));
    beforeEach(inject(function(_$controller_) {
      // spyOn(_webDevTec_, 'getTec').and.returnValue([{}, {}, {}, {}, {}]);
      // spyOn(_toastr_, 'info').and.callThrough();

      vm = _$controller_('MainController');
      $controller = _$controller_('MainController');
      // vm.name;
    }));


    it('should begin vm.litUp as false', function () {
      expect(vm.litUp).toEqual(false);
    });

    it('should set litUp to text to be true when button is hovered over', function() {

      vm.buttonHovered();
      expect(vm.litUp).toEqual(true);
      expect(vm.litUp).toBeTruthy();
    });


    it('should set litUp text to be false when button is hovered out of', function() {

      vm.buttonMouseOut();
      expect(vm.litUp).toEqual(false);
      expect(vm.litUp).toBeFalsy();

    });

    it('should change imgSrc when hovered over', function () {
      vm.buttonHovered();
      expect(vm.imgSrc).toEqual('assets/sample-images/lightbulb-on.jpg')
    });

    it('should change imgSrc when hovered out of', function () {
      vm.buttonHovered();
      vm.buttonMouseOut();
      expect(vm.imgSrc).toEqual('assets/sample-images/lightbulb-off.jpg')

    });

    it('should start with imgSrc off', function () {
      expect(vm.imgSrc).toEqual('assets/sample-images/lightbulb-off.jpg')

    })



  });
})();
