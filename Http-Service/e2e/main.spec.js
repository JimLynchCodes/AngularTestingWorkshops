'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should have resultText defined', function () {
      expect(page.resultText).toBeDefined()
  })


  it('should display some text', function() {
    expect(page.resultText.getText()
      .then())
      .toEqual("{data:'data-that-should-be-returned'}");
  });


});
