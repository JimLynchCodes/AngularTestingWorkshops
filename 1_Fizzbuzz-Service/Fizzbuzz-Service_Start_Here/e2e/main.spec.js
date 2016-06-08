'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should have our elements defined', function() {
    expect(page.input.isPresent()).toEqual(true);
    expect(page.resultText.isPresent()).toEqual(true);
  });

  it('should return buzz when the input has entered 5', function () {
    page.input.sendKeys('5');
    expect(page.resultText.getText()).toEqual('')
  });

  it('should...', function () {


    
  })


});
