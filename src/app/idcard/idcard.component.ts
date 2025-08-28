import { Component } from '@angular/core';
import { IdcardService } from '../idcard.service';

@Component({
  selector: 'app-idcard',
  templateUrl: './idcard.component.html',
  styleUrls: ['./idcard.component.css']
})
export class IdcardComponent {
Cards:any[]=[];
   constructor(private  _idcardservices:IdcardService){
   _idcardservices.getidcard().subscribe(
     (data:any)=>{
       console.log(data);
       this.Cards=data;
        console.log("data:", this.Cards);
      },(err:any)=>{
       alert("internal server error");
      })
     }

//filtered IdCards

searchkeyword:string='';
search(){
  this._idcardservices.getFilteredidcard(this.searchkeyword).subscribe(
    (data:any)=>{
      console.log(data);
      this.Cards=data;
      // console.log("vehicles data:", this.vehicles);
     },(err:any)=>{
      alert("internal server error");
     }
    )
}
//sorting

columnName:string='';
sortorder:string='';
sort(){
  this._idcardservices.getSortedidcard(this.columnName,this.sortorder).subscribe(
    (data:any)=>{
      console.log(data);
      this.Cards=data;
      // console.log("vehicles data:", this.vehicles);
     },(err:any)=>{
      alert("internal server error");
     }
    )
}

items:number=0;
pagenumber:number=0;
pagination(){
 this._idcardservices.getpagitedidcard(this.items,this.pagenumber).subscribe((data:any)=>{
  console.log(data);
    this.Cards=data;
    },(err:any)=>{
      alert("internal server error")
    }
  )
}

loadidcards(){
  this._idcardservices.getidcard().subscribe(
    (data:any)=>{
      console.log(data);
      this.Cards=data;
      console.log("idcard data:",this.Cards);
    },(err:any)=>{
      alert("internal server error");
    }
  )
}

delete(id: any) {
  if (confirm("Are you sure to delete?")==true) {
    this._idcardservices.deleteidcard(id).subscribe(
      (data: any) => {
        alert("Record deleted successfully");
        // Only reload after successful delete
      },
      (err: any) => {
        alert("Internal server error");
      }
    );
    this.loadidcards(); 
  } else {
    alert("You have cancelled the delete");
  }
}
}