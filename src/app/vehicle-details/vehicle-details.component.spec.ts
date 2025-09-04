import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleDetailsComponent } from './vehicle-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VehiclesService } from '../vehicles.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('VehicleDetailsComponent', () => {
  let component: VehicleDetailsComponent;
  let fixture: ComponentFixture<VehicleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleDetailsComponent ],
      imports: [HttpClientTestingModule],
      providers: [VehiclesService,  {
          provide: ActivatedRoute,
          useValue: { params: of({ id: 1 }) } // mock params observable
        } ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
