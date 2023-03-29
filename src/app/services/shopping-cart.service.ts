import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviromants/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private _http: HttpClient) { }

  public addProductToCart(AdId : string) : Observable<any>{
    return this._http.post(`${environment.host}/selectedAd/add?AdId=${AdId}`, null );
  }

  public deleteProduct(id: string): void{
    this._http.delete<string>(`${environment.host}/selected/delete?Id=${id}`).subscribe();
}

public GetSelectedCurrentUser(take : number) : Observable<ItemCartDto[]>{
  let url = `${environment.host}/allSelectedByUserID?take=${take}`;
    return this._http.get<ItemCartDto[]>(url);
}
}
export interface ItemCartDto{
  id: string;
  userId: string;
  adId: string;
  dateAdded : string;
  }

