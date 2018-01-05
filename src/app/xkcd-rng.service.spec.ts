import { TestBed, inject } from '@angular/core/testing';

import { XkcdRngService } from './xkcd-rng.service';

describe('XkcdRngService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XkcdRngService]
    });
  });

  it('should be created', inject([XkcdRngService], (service: XkcdRngService) => {
    expect(service).toBeTruthy();
  }));
});
