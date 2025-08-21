import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
  
  mails:any[]=[];
  constructor(private _mailservice:MailService){
  _mailservice.getmail().subscribe(
    (data:any)=>{
      console.log(data);
      this.mails=data;
      console.log("mail data:",this.mails);
    },(err:any)=>{
      alert("internal server error");
    }
  )
}
}
