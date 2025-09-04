import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailComponent } from './mail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MailService } from '../mail.service';

describe('MailComponent', () => {
  let component: MailComponent;
  let fixture: ComponentFixture<MailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailComponent ],
       imports: [HttpClientTestingModule],  // ✅ provide HttpClient mock
      providers: [MailService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
