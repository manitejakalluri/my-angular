import { Component } from '@angular/core';
import { AccountDetailsService } from '../accountdetails.service';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent {
accounts:any[]=[];
  constructor(private _accountdetailservices:AccountDetailsService){
    this._accountdetailservices.getCustomerDetails().subscribe((data:any)=>{
       this.accounts=data;
      console.log( "Details: ", this.accounts);
    },(err:any)=>{
      alert("Internal Server Error!")
    }
  )

  }

  delete(index:number){
    this.accounts.splice(index,1);
  }

  searchkeyword:string='';
  search(){
    this._accountdetailservices.getFilteredCustomerDetails(this.searchkeyword).subscribe((data:any)=>{
        console.log(data);
        this.accounts=data;
    },(error:any)=>{
      alert("Internal Server Error");
    }
  )

  }

columnName:string='';
orderName:string='';
sort(){
  this._accountdetailservices.getSortingCustomerDetails(this.columnName,this.orderName).subscribe((data:any)=>{
      this.accounts=data;
  },(error:any)=>{
    alert("Internal Server Error!")
  }
)
}

limitNumber:number=0;
pageNumber:number=0;
pagination(){
  this._accountdetailservices.getPaginationCustomerDetails(this.limitNumber,this.pageNumber).subscribe((data:any)=>{
    this.accounts=data;
  },(error:any)=>{
    alert("Internal Server Error");
  }
)
}
}
