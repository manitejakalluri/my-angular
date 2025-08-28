import { Component } from '@angular/core';
import { PinterestService } from '../pinterest.service';

@Component({
  selector: 'app-pinterest',
  templateUrl: './pinterest.component.html',
  styleUrls: ['./pinterest.component.css']
})
export class PinterestComponent {
pinterests:any[]=[];
  pinterestservice: any;
  constructor(private _pinterestservice:PinterestService){
  _pinterestservice.getpinterest().subscribe(
    (data:any)=>{
      console.log(data);
      this.pinterests=data;
      console.log("pinterest data:",this.pinterests);
    },(err:any)=>{
      alert("internal server error");
    }
  )
}
}
