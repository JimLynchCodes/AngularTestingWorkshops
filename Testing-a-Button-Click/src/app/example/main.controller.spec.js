
/**
 * Created by jameslynch on 4/19/16.
 */
(function() {
  'use strict';


  describe('MainController', function () {

    var $controller;
    var calcController;

    beforeEach(module('testingButtonClick'));
    beforeEach(inject(function(_$controller_) {

      $controller = _$controller_;
      calcController = $controller('MainController')
    }));

    it ('should begin with buttonClicked false', function () {
      expect(calcController.buttonClicked).toBeFalsy();
      expect(calcController.buttonClicked).toEqual(false);
    });

    it ('should begin with totalButtonClicks equal to 0', function () {
      expect(calcController.totalButtonClicks).toEqual(0);
    });

    it('should show that the buttonClicked is true after button is clicked. ', function ()  {
      calcController.onButtonClicked();
      expect(calcController.buttonClicked).toEqual(true);

    })

    it ('should begin with totalButtonClicks equal to 1 after button click.', function () {
      calcController.onButtonClicked();
      expect(calcController.totalButtonClicks).toEqual(1);
    });

    it ('should begin with totalButtonClicks equal to 5 after 5 button click.', function () {
      calcController.onButtonClicked();
      calcController.onButtonClicked();
      calcController.onButtonClicked();
      calcController.onButtonClicked();
      calcController.onButtonClicked();
      expect(calcController.totalButtonClicks).toEqual(5);
    });

  })

})();
