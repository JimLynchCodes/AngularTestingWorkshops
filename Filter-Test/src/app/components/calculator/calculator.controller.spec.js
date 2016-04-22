
/**
 * Created by jameslynch on 4/19/16.
 */
(function() {
     'use strict';


     describe('CalculatorController', function () {

          var $controller;
          var calcController;

          beforeEach(module('asyncUnitTest'))
          beforeEach(inject(function(_$controller_) {

               $controller = _$controller_;
               calcController = $controller('CalculatorController')
          }))

          it ('should begin with buttonClicked false', function () {
               expect(calcController.buttonClicked).toBeFalsy();
               expect(calcController.buttonClicked).toEqual(false);
          })

          it('should show that the buttonClicked is true affer button is clicked. ', function ()  {
               calcController.onButtonClicked();
               expect(calcController.buttonClicked).toEqual(true);

          })



     })


})();
