import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent {
public vehicleform:FormGroup=new FormGroup({
  vehicle:new FormControl(),
  manufacturer:new FormControl(),
  model:new FormControl(),
  type:new FormControl(),
  fule:new FormControl(),
  color:new FormControl(),
  image:new FormControl(),
  cost:new FormControl(),
  tyres:new FormControl(),
});

id:number=0;
vehicle: any={}
constructor(private _vehicleService:VehiclesService, private _router:Router, private _activatedRoute:ActivatedRoute){
  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data);
    this.id=data.id;
    console.log(this.id);

    _vehicleService.getvehicle(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicleform.patchValue(data);
      }
    )
    }
  )
}
  submit(){
  if (this.id) {
    this._vehicleService.updatevehicle(this.id,this.vehicleform.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("vehicle updated successfully");
      this._router.navigateByUrl("/dashboard/vehicles");
    },(err:any)=>{
      alert("internal server error")
      }
    )
  } else {
    console.log(this.vehicleform.value);
  this._vehicleService.createvehicle(this.vehicleform.value).subscribe(
    (data:any)=>{
      alert("vehicle added successfully");
      this._router.navigateByUrl("/dashboard/vehicles");
    },(err:any)=>{
      alert("internal server error")
    }
  )
  }
}
}
