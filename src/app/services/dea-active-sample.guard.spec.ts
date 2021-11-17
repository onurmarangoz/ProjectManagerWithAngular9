import { TestBed } from '@angular/core/testing';

import { DeaActiveSampleGuard } from './dea-active-sample.guard';

describe('DeaActiveSampleGuard', () => {
  let guard: DeaActiveSampleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeaActiveSampleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
