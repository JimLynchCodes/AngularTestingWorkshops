
/**
 * Created by jameslynch on 4/19/16.
 */
(function() {
     'use strict';

     describe('CalculatorController e2e', function () {

          it('should find the \"calculator-title\" element', function() {
               browser.get('http://juliemr.github.io/protractor-demo/');

               expect(element(by.class('calculator-title'))).toBeTruthy();

          })

          it('should not find elements that don\'t exist', function() {
               browser.get('http://juliemr.github.io/protractor-demo/');

               expect(element(by.class('nonexistent-element'))).toBeFalsy();

          })

     })


})();
