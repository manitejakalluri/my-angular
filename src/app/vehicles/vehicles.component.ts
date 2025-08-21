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
  this.loadvehicles();
}


  loadvehicles(){
  this._vehiclesservice.getvehicles().subscribe(
    (data:any)=>{
      console.log(data);
      this.vehicles=data;
      console.log("vechicles data:",this.vehicles);
    },(err:any)=>{
      alert("internal server error");
    }
  )
}


delete(id:any){
  if(confirm("are you sure to delete?")==true){
    this._vehiclesservice.deletevehicles(id).subscribe((data:any)=>{
    alert("record delete successfully")
  },(err:any)=>{
    alert("internal server error")
  })

  this.loadvehicles()
  }else {
  alert("you have canclled the delete")
}
}

searchkeyword:string='';
search(){
  this._vehiclesservice.getfilteredvehicles(this.searchkeyword).subscribe((data:any)=>{
    console.log(data);
    this.vehicles=data;
    },(err:any)=>{
      alert("internal server error")
    }
  )
}


coloumname:string='';
sortorder:string='';
sort(){
  this._vehiclesservice.getsortedvehicles(this.coloumname,this.sortorder).subscribe((data:any)=>{
    console.log(data);
    this.vehicles=data;
    },(err:any)=>{
      alert("internal server error")
    }
  )
}


items:number=0;
pagenumber:number=0;
pagination(){
 this._vehiclesservice.getpagitedvehicles(this.items,this.pagenumber).subscribe((data:any)=>{
  console.log(data);
    this.vehicles=data;
    },(err:any)=>{
      alert("internal server error")
    }
  )
}
}