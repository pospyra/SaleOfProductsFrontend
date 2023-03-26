import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private _http: HttpClient) { }

  public addProductToCart(AdId : string) : Observable<any>{
    return this._http.post(`https://localhost:7278/selectedAd/add?AdId=${AdId}`, null );
  }

  public deleteProduct(id: string): void{
    this._http.delete<string>(`https://localhost:7278/selected/delete?Id=${id}`).subscribe();
}

public GetSelectedCurrentUser(take : number) : Observable<any>{
  let url = `https://localhost:7278/allSelectedByUserID?take=${take}`;
    return this._http.get<any>(url);
}



}
