import { TestBed } from '@angular/core/testing';

import { PinterestService } from './pinterest.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PinterestService', () => {
  let service: PinterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(PinterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
