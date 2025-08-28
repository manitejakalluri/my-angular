import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdcardDetailsComponent } from './idcard-details.component';

describe('IdcardDetailsComponent', () => {
  let component: IdcardDetailsComponent;
  let fixture: ComponentFixture<IdcardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdcardDetailsComponent ]
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
