import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdcardDetailsComponent } from './idcard-details.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('IdcardDetailsComponent', () => {
  let component: IdcardDetailsComponent;
  let fixture: ComponentFixture<IdcardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ IdcardDetailsComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 123 }) // ✅ mock route params
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdcardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
