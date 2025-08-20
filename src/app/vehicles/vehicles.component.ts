import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicles:any[]=[];
  constructor(private _vehiclesservice:VehiclesService){
  _vehiclesservice.getvehicles().subscribe(
    (data:any)=>{
      console.log(data);
      this.vehicles=data;
      console.log("vechicles data:",this.vehicles);
    },(err:any)=>{
      alert("internal server error");
    }
  )
}
}