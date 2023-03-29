import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviromants/environment.prod';

@Injectable({
  providedIn: 'root'
})


export class ProductService {

  constructor(private _http: HttpClient) { }



createProduct(name : any, 
  SubcategoryId: any,
  Description: any,
  price: any, delivery : any, photo :any  ) : Observable<any>{
  return this._http.post(`${environment.host}/ad/createAd?Name=${name}&SubcategoryId=${SubcategoryId}&Description=${Description}&Price=${price}&PossibleOfDelivery=${delivery}`, photo);
}

updateProduct(
  idProduct : string,
  name : any, 
  SubcategoryId: any,
  Description: any,
  price: any, delivery : any ) : Observable<any>{
  return this._http.put(`${environment.host}/ad/update/${idProduct}?Name=${name}&SubcategoryId=${SubcategoryId}&Description=${Description}&Price=${price}&PossibleOfDelivery=${delivery}`, null);

}

  
  getAll() : Observable<ProductDto[]>{
    let url = `${environment.host}/ad/all?take=100`;
    return this._http.get<ProductDto[]>(url);
}

  getProductFilter(take: number, name : string, categoryId?: any) : Observable<any>{
    let url = `${environment.host}/ad/filter?Name=${name}&SubcategoryId=${categoryId}&take=${take}`;
    return this._http.get<any>(url);
  }

  public getById(id: string): Observable<any>{
    return this._http.get<any>(`${environment.host}/ad/${id}`);
  }
  
  public deleteProduct(id: string): void{
    this._http.delete<string>(`${environment.host}/ad/delete/${id}`).subscribe();
}
}

export interface ProductDto{
  id: string;
  name: string;
  description: string;
  region : string;
  price : number;
  createTime : string;
  userId: string;
  subcategoryId : string;
  kodBase64:string;
  }