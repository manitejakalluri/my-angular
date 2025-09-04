import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateuserComponent } from './createuser.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CreateuserComponent', () => {
  let component: CreateuserComponent;
  let fixture: ComponentFixture<CreateuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateuserComponent ],
      imports: [
        ReactiveFormsModule,     // ✅ enables [formGroup] and formControlName
        HttpClientTestingModule  // ✅ safe if HttpClient is used
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
