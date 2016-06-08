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

  it('should not have nonexisting elements defined', function() {
    expect(page.nonexistentEl.isPresent()).toBeFalsy();
    expect(page.nonexistentEl.isPresent()).toEqual(false);

  });

  it('should list more than 5 awesome things', function () {
    page.input.sendKeys('5');
    expect(page.resultText.getText()).toEqual('buzz')


  });

  it('should list more than 5 awesome things', function () {
    page.input.sendKeys('15');
    expect(page.resultText.getText()).toEqual('fizzbuzz')


  });

});
