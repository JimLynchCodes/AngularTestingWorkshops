import {
  beforeEachProviders,
beforeEach,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2ButtonClickAppComponent } from '../app/angular2-button-click.component';


describe('App: Angular2ButtonClick', () => {

let app;

beforeEachProviders(() => [Angular2ButtonClickAppComponent]);
beforeEach(inject([Angular2ButtonClickAppComponent], (_app: Angular2ButtonClickAppComponent) => {

  app = _app;
}))



  it('should create the app', () => {

    expect(app).toBeTruthy();
  });

  it('should have as title \'angular2-button-click works!\'', () => {
    expect(app.title).toEqual('angular2-button-click works!');
  });
});
