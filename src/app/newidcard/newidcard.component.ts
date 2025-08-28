import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IdcardService } from '../idcard.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-newidcard',
  templateUrl: './newidcard.component.html',
  styleUrls: ['./newidcard.component.css']
})
export class NewidcardComponent {
  // constructor(private _idcardService:IdcardService, private _router:Router){}

public studentForm:FormGroup=new FormGroup({

  name:new FormControl(),
  phone:new FormControl(),
  city:new FormControl(),
  dob:new FormControl(),
  profile_picture:new FormControl(),
  email:new FormControl(),
  school_logo: new FormControl(),
  school_name:new FormControl(),
  school_city:new FormControl(),
  school_pin:new FormControl(),
  });
id:number=0;
vehicle: any={}
 constructor(private _idcardService:IdcardService, private _router:Router, private _activatedRoute:ActivatedRoute){
  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data);
    this.id=data.id;
    console.log(this.id);

    _idcardService.getidcards(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.studentForm.patchValue(data);
      }
    )
    }
  )
}
  submit(){
    if (this.id){
      this._idcardService.updateIdCard(this.id,this.studentForm.value).subscribe(
        (data:any)=>{
          console.log(data);
          alert("students detalis updated successfully");
          this._router.navigateByUrl("/dashboard/idCard");
        },(err:any)=>{
          alert("internal server error")
        }
      )
    } else {
      console.log(this.studentForm.value);
    this._idcardService.createIdCard(this.studentForm.value).subscribe(
      (data:any)=>{
      alert("students detalis updated successfully");
    },(err:any)=>{
      alert("Internal Server Error!")
    }
  )
  }
}
}