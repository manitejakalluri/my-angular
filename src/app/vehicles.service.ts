import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  // apiurl:string='/assets/data.json';
  apiurl:string='https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction';

  constructor(private _httpclient:HttpClient) { }
  getvehicles():Observable<any>{
    return this._httpclient.get(this.apiurl);
  }

  getvehicle(id:any):Observable<any>{
    return this._httpclient.get(this.apiurl+'/'+id);
  }

   getfilteredvehicles(term:any):Observable<any>{
    return this._httpclient.get(this.apiurl+'?filter='+term);
  }

  getsortedvehicles(coloum:any,order:any):Observable<any>{
    return this._httpclient.get(this.apiurl+'?sortBy='+coloum+"&order="+order);
  }

   getpagitedvehicles(limit:any,page:any):Observable<any>{
    return this._httpclient.get(this.apiurl+'?limit='+limit+"&page="+page);
  }

  deletevehicles(id:any):Observable<any>{
    return this._httpclient.delete(this.apiurl+'/'+id);
  }

  createvehicle(data:any):Observable<any>{
    return this._httpclient.post(this.apiurl,data);
  }

  updatevehicle(id:any,data:any):Observable<any>{
    return this._httpclient.put(this.apiurl+'/'+id,data);
  }
}
