import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdcardComponent } from './idcard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IdcardService } from '../idcard.service';
import { FormsModule } from '@angular/forms';

describe('IdcardComponent', () => {
  let component: IdcardComponent;
  let fixture: ComponentFixture<IdcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdcardComponent ],
      imports: [HttpClientTestingModule, FormsModule], 
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
