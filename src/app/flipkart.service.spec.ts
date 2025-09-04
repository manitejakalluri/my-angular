import { TestBed } from '@angular/core/testing';

import { FlipkartService } from './flipkart.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FlipkartService', () => {
  let service: FlipkartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlipkartService]
    });
    service = TestBed.inject(FlipkartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
