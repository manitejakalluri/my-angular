import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
public loginfrom:FormGroup=new FormGroup({
  email:new FormControl(),
  password:new FormControl()
})

constructor (private _loginservice:LoginService,private _router:Router){}
login(){
  console.log(this.loginfrom.value);
  this._loginservice.login(this.loginfrom.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert(data.message);
      sessionStorage.setItem('token',data.token);

      this._router.navigateByUrl("/dashboard");
    },(err:any)=>{
      alert("invalid credentials");
    }
  )
}
}
