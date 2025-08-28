import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private _httpclient:HttpClient) { }
  getvehicles():Observable<any>{
    return this._httpclient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction');
  }

  getvehicle(id:any):Observable<any>{
    return this._httpclient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id);
  }

   getfilteredvehicles(term:any):Observable<any>{
    return this._httpclient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter='+term);
  }

  getsortedvehicles(coloum:any,order:any):Observable<any>{
    return this._httpclient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy='+coloum+"&order="+order);
  }

   getpagitedvehicles(limit:any,page:any):Observable<any>{
    return this._httpclient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit='+limit+"&page="+page);
  }

  deletevehicles(id:any):Observable<any>{
    return this._httpclient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id);
  }

  createvehicle(data:any):Observable<any>{
    return this._httpclient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction',data);
  }

  updatevehicle(id:any,data:any):Observable<any>{
    return this._httpclient.put('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id,data);
  }
}
