import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewidcardComponent } from './newidcard.component';

describe('NewidcardComponent', () => {
  let component: NewidcardComponent;
  let fixture: ComponentFixture<NewidcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewidcardComponent ]
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
