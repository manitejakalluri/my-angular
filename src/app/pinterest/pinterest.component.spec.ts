import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PinterestComponent } from './pinterest.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PinterestService } from '../pinterest.service';

describe('PinterestComponent', () => {
  let component: PinterestComponent;
  let fixture: ComponentFixture<PinterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PinterestComponent],
      imports: [HttpClientTestingModule], 
      providers: [PinterestService]
    }).compileComponents();

    fixture = TestBed.createComponent(PinterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
