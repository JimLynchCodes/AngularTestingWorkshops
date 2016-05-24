export class Angular2ButtonClickPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-button-click-app h1')).getText();
  }
}
