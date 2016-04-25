
/**
 * Created by jameslynch on 4/19/16.
 */
(function() {
     'use strict';

     describe('CalculatorController e2e', function () {

          beforeEach(function() {
               browser.get('http://localhost:3000/');
          })

          it('should find the \"calculator-title\" element', function() {
               expect(element(by.css('.page-title')).isPresent()).toBeTruthy();
          });

          it('should not find elements that don\'t exist', function() {
               browser.get('http://localhost:3000/');

               expect(element(by.css('nonexistent-element')).isPresent()).toBeFalsy();

          });


          it('should not have clicked text visible to start', function() {
               expect(element(by.id('clicked-text')).isPresent()).toBeTruthy();
               expect(element(by.id('clicked-text')).isDisplayed()).toBeFalsy();

          });

          it('should show the text after the button is clicked', function () {
               element(by.css('.my-button')).click();
               expect(element(by.id('clicked-text')).isDisplayed()).toBeTruthy();
          });

          it ('should show correct text after button is pressed once.', function() {
               element(by.css('.my-button')).click();
               expect(element(by.id('clicked-text')).getText()).toEqual('The button has been clicked 1 time.');
          });

          it('should show the correct text after button is clicked 5 times.', function () {
               element(by.css('.my-button')).click();
               element(by.css('.my-button')).click();
               element(by.css('.my-button')).click();
               element(by.css('.my-button')).click();
               element(by.css('.my-button')).click();
               expect(element(by.id('clicked-text')).getText()).toEqual('The button has been clicked 5 times.');
          })

     })


})();
