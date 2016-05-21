(function () {
     'use strict';
     var page;
     describe('Button Click Example', function () {

          beforeEach(function () {
               browser.get('http://localhost:3000/');
               page = require('./main.po');
          })

          it('should find the \"calculator-title\" element', function () {
               expect(page.pageTitle.isPresent()).toBeTruthy();
          });

          it('should not find elements that don\'t exist', function () {
               browser.get('http://localhost:3000/');

               expect(page.nonexistentElement.isPresent()).toBeFalsy();

          });

          it('should not have clicked text visible to start', function () {
               expect(page.clickedText.isPresent()).toBeTruthy();
               expect(page.clickedText.isDisplayed()).toBeFalsy();

          });

          it('should show the text after the button is clicked', function () {
               page.myButton.click();
               expect(page.clickedText.isDisplayed()).toBeTruthy();
          });

          it('should show correct text after button is pressed once.', function () {
               page.myButton.click();
               expect(page.clickedText.getText()).toEqual('The button has been clicked 1 time.');
          });

          it('should show the correct text after button is clicked 5 times.', function () {
               page.myButton.click();
               page.myButton.click();
               page.myButton.click();
               page.myButton.click();
               page.myButton.click();
               expect(page.clickedText.getText()).toEqual('The button has been clicked 5 times.');
          })

     })

})();
