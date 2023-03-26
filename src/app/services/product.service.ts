import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }



  
  getAll() : Observable<any>{
    let url = `https://localhost:7278/ad/all?take=6`;
    return this._http.get<any>(url);
}
  getProductFilter(take: number, name : string, categoryId?: any) : Observable<any>{
    let url = `https://localhost:7278/ad/filter?Name=${name}&SubcategoryId=${categoryId}&take=${take}`;
    return this._http.get<any>(url);
  }

  public getById(id: string): Observable<any>{
    return this._http.get<any>(`https://localhost:7278/ad/${id}`);
  }
  
  public deleteProduct(id: string): void{
    this._http.delete<string>(`https://localhost:7278/ad/delete/${id}`).subscribe();
}
}
