/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.input = element(by.css('.my-input'));
  this.resultText = element(by.css('.my-header'));

  this.nonexistentEl = element(by.css('.an-element-with-this-class-does-not-exist'));

};

module.exports = new MainPage();
