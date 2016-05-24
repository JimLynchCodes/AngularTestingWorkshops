import { Angular2ButtonClickPage } from './app.po';

describe('angular2-button-click App', function() {
  let page: Angular2ButtonClickPage;

  beforeEach(() => {
    page = new Angular2ButtonClickPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-button-click works!');
  });
});
