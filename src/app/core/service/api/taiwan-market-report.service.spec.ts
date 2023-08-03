import { TestBed } from '@angular/core/testing';

import { TaiwanMarketReportService } from './taiwan-market-report.service';

describe('TaiwanMarketReportService', () => {
  let service: TaiwanMarketReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaiwanMarketReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
