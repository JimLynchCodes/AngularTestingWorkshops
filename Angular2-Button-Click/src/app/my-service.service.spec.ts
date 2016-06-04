import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { MyServiceService } from './my-service.service';

describe('MyService Service', () => {
  beforeEachProviders(() => [MyServiceService]);

  it('should ...',
      inject([MyServiceService], (service: MyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
