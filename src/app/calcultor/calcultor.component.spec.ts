import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcultorComponent } from './calcultor.component';
import { FormsModule } from '@angular/forms';

describe('CalcultorComponent', () => {
  let component: CalcultorComponent;
  let fixture: ComponentFixture<CalcultorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcultorComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add two numbers correctly', () => {
    component.num1 = 10;
    component.num2 = 5;
    component.addition();
    expect(component.result).toBe(15);
  });

  it('should subtract two numbers correctly', () => {
    component.num1 = 10;
    component.num2 = 5;
    component.subtraction();
    expect(component.result).toBe(5);
  });

  it('should multiply two numbers correctly', () => {
    component.num1 = 10;
    component.num2 = 5;
    component.multiplication();
    expect(component.result).toBe(50);
  });

  it('should divide two numbers correctly', () => {
    component.num1 = 10;
    component.num2 = 5;
    component.division();
    expect(component.result).toBe(2);
  });

  it('should handle division by zero (Infinity)', () => {
    component.num1 = 10;
    component.num2 = 0;
    component.division();
    expect(component.result).toBe(Infinity); // JS gives Infinity
  });
});
