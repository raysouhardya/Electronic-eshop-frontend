import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpecDto } from './spec-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }
  viewproductspecsbyproductid(productid:number):Observable<any>
  {
    return this.http.get("http://localhost:8082/elecapp/viewspecsbyproductid/"+productid);
  }
  viewproductspecsbyspecid(specid:number):Observable<any>
  {
    return this.http.get("http://localhost:8082/elecapp/viewspecsbyspecid/"+specid);
  }
  addproductspecs(specs:SpecDto):Observable<any>
  {
    return this.http.post("http://localhost:8082/elecapp/addspecs",specs);
  }
  editproductspecs(specs:SpecDto):Observable<any>
  {
    return this.http.put("http://localhost:8082/elecapp/editspecs",specs);
  }
}
