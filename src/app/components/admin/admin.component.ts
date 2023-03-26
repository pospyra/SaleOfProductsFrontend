import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  public category$ =  this._categoryService.getListCategory();
  product : any;
  category: string = "";

  constructor(private fb : FormBuilder,
    private _categoryService: CategoryService,
    private _productService: ProductService,
    private route : ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => console.log(paramMap.get('Name')));
    this.route.paramMap.subscribe(paramMap => console.log(paramMap.get('SubcategoryId')));
    this.onSubmit()
  }

  readonly formSearch = this.fb.group({ 
    categoryId: [ ]
  })

  //редактировать

  //добавить
  //категории удалить/редактировать/добаить

  //удалить
  deleteProduct(id: string){
    this._productService.deleteProduct(id);
  }



  onSubmit(){
    const productName = (<HTMLInputElement>document.getElementById('Name')).value;
    this.product = this._productService.getProductFilter(5,
      productName,
       this.formSearch.get('categoryId')?.value);
    }
}