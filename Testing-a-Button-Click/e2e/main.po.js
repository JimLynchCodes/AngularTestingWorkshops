/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */
(function () {

     'use strict';

     var MainPage = function () {
          this.pageTitle = element(by.css('.page-title'));
          this.nonexistentElement = element(by.css('.nonexistent-element'));
          this.clickedText = element(by.id('clicked-text'));
          this.myButton = element(by.css('.my-button'));
     };

     module.exports = new MainPage();

})();