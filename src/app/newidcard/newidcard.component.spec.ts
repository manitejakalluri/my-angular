import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewidcardComponent } from './newidcard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IdcardService } from '../idcard.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('NewidcardComponent', () => {
  let component: NewidcardComponent;
  let fixture: ComponentFixture<NewidcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewidcardComponent ],
      imports: [ReactiveFormsModule,HttpClientTestingModule],
      providers: [IdcardService, {
          provide: ActivatedRoute,
          useValue: { params: of({ id: 1 }) } // mock params or snapshot as needed
        }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewidcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
