import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export class ConsumoApi {
  private readonly _http =inject(HttpClient); 

  getAllInfo():Observable<any>{
    return this._http.get('https://fakestoreapi.com/products')
  }
}