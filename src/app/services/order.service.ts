import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _http : HttpClient) { }

  RegistrOrder(adressDelivery: any ) : Observable<any>{
    return this._http.post(`https://localhost:7278/order/add?DeliveryAddress=${adressDelivery}`, null);
  }


}
