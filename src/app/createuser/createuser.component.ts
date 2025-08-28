import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent {
public userform:FormGroup=new FormGroup({
  name:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
  email:new FormControl(),
  password:new FormControl(),
  mobile:new FormControl(),
  address:new FormGroup({
    city:new FormControl(),
    state:new FormControl(),
    pincode:new FormControl(),
  }),
  type:new FormControl(),
  cards:new FormArray([])
})
get cardsFormArray(){
  return this.userform.get('cards') as FormArray;
}

addcard(){
  this.cardsFormArray.push(
    new FormGroup({
      cardnumber:new FormControl(),
      expiry:new FormControl(),
      cvv:new FormControl(),
    })
  )
}

delete(index:any){
  this.cardsFormArray.removeAt(index);
}

constructor(){
  this.userform.get('type')?.valueChanges.subscribe(
    (data:any)=>{
      if(data=='residential'){
        this.userform.addControl('hostelFee',new FormControl);
        this.userform.removeControl('busFee');
      }else{
        this.userform.addControl('busFee',new FormControl);
        this.userform.removeControl('hostelFee');
      }
    }
  )
}


submit(){
  console.log(this.userform.value);
}
}
