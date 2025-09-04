import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatevehicleComponent } from './createvehicle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VehiclesService } from '../vehicles.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CreatevehicleComponent', () => {
  let component: CreatevehicleComponent;
  let fixture: ComponentFixture<CreatevehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatevehicleComponent],
      imports: [
        ReactiveFormsModule,   // <-- required for [formGroup]
        HttpClientTestingModule
      ],
      providers: [
        VehiclesService,
        { 
          provide: ActivatedRoute, 
          useValue: { params: of({ id: 1 }) } // mock route params if needed
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatevehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

