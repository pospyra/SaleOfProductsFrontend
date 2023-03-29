import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviromants/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _http : HttpClient) { }

  RegistrOrder(adressDelivery: any ) : Observable<any>{
    return this._http.post(`${environment.host}/order/add?DeliveryAddress=${adressDelivery}`, null);
  }


}
