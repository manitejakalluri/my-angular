import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  flipkarts:any[]=[];
  VehiclesService: any;
  vehicles: any;
  constructor(private _flipkartservice:FlipkartService){
  _flipkartservice.getflipkart().subscribe(
    (data:any)=>{
      console.log(data);
      this.flipkarts=data;
      console.log("flipkart data:",this.flipkarts);
    },(err:any)=>{
      alert("internal server error");
    }
  )
}
}
