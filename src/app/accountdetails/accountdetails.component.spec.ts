import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountdetailsComponent } from './accountdetails.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AccountdetailsComponent', () => {
  let component: AccountdetailsComponent;
  let fixture: ComponentFixture<AccountdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountdetailsComponent ],
        imports: [HttpClientTestingModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
