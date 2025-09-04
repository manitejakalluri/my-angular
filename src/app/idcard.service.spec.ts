import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { IdcardService } from './idcard.service';

describe('IdcardService', () => {
  let service: IdcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [HttpClientTestingModule],
      providers: [IdcardService]
    });
    service = TestBed.inject(IdcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
