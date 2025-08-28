import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountDetailsService {

  constructor(private _httpclient:HttpClient ) { }
getCustomerDetails():Observable<any>{
  return this._httpclient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals');

}

getFilteredCustomerDetails(term:any):Observable<any>{
  return this._httpclient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter='+term);

}

getSortingCustomerDetails(column:any,order:any):Observable<any>{
  return this._httpclient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy='+column+"&order="+order);

}

getPaginationCustomerDetails(limit:any,page:any):Observable<any>{
  return this._httpclient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit='+limit+"&page="+page);

}


}