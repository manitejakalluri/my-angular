import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../vehicles.service';
import { IdcardService } from '../idcard.service';

@Component({
  selector: 'app-idcard-details',
  templateUrl: './idcard-details.component.html',
  styleUrls: ['./idcard-details.component.css']
})
export class IdcardDetailsComponent {
id:number=0;
  cards: any={}
constructor(private _activatedRoute:ActivatedRoute, private _idcardservices:IdcardService){
  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data);
      this.id=data.id;
      console.log(this.id);

      _idcardservices.getidcards(this.id).subscribe(
        (data:any)=>{
          console.log(data);
          this.cards=data;
        },(err:any)=>{
          alert("internal server error")
        }
      )
    }
  )
}
}

