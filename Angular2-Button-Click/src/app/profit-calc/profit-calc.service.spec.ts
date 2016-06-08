import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ProfitCalcService } from './profit-calc.service';

describe('ProfitCalc Service', () => {
  beforeEachProviders(() => [ProfitCalcService]);

  it('should ...',
      inject([ProfitCalcService], (service: ProfitCalcService) => {
    expect(service).toBeTruthy();
  }));
});
