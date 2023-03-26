import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http : HttpClient) { }

  getListCategory(): Observable<any>{
    return this._http.get<any>(`https://localhost:7278/category/all`).pipe(map(category=>{
      return this.arrayToNzCascade(category);
    }));}

    private arrayToNzCascade(array: any[]) {
      return array.map(item  => {
        const processed =  {
          key: item.id,
          title: item.name,
        } as any;
  
        if (item.subcategories?.length) {
          processed.children = this.arrayToNzCascade(item.subcategories);
        } else {
          processed.isLeaf = true;
        }
        return processed;
      })
    }
  }
