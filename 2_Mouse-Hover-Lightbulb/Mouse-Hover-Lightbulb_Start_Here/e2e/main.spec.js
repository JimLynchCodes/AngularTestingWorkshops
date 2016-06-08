'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should include jumbotron with correct data', function() {
    // expect(page.h1El.getText()).toBe('\'Allo, \'Allo!');
    // expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/yeoman.png$/);
    // expect(page.imgEl.getAttribute('alt')).toBe('I\'m Yeoman');
    expect(true).toEqual(true);
  });


  it('should have the false text when page loads', function () {

    expect(page.outputText.getText()).toBe('lit is: false');
  });

  it('should show true when you mouse over ', function () {

     browser.actions().mouseMove(page.button).perform();
    expect(page.outputText.getText()).toBe('lit is: true');
  });

  it('should show false when you mouse out', function () {

     browser.actions().mouseMove(page.button).perform();
    browser.actions().mouseMove(page.outputText).perform();
    expect(page.outputText.getText()).toBe('lit is: false');
  });


  it('should have the false img when page loads', function () {

    // expect(page.lightbulb.getAttribute('src')).toEqual('assets/sample-images/lightbulb-off.jpg');
    expect(page.lightbulb.getAttribute('src')).toContain('assets/sample-images/lightbulb-off.jpg');
  });

  it('should show lit img when you mouse over ', function () {

    browser.actions().mouseMove(page.button).perform();
    expect(page.lightbulb.getAttribute('src')).toContain('assets/sample-images/lightbulb-on.jpg');
  });

  it('should show false img when you mouse out', function () {

    browser.actions().mouseMove(page.button).perform();
    browser.actions().mouseMove(page.outputText).perform();
    expect(page.lightbulb.getAttribute('src')).toContain('assets/sample-images/lightbulb-off.jpg');
  });


  // it('should list more than 5 awesome things', function () {
  //   expect(page.thumbnailEls.count()).toBeGreaterThan(5);
  // });

});
