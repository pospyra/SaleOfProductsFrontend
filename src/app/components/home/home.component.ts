import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { combineLatest, Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public category$ =  this._categoryService.getListCategory();
  product : any;
  category: string = "";

  constructor(private fb : FormBuilder,
    private _categoryService: CategoryService,
    private _productService: ProductService,
    private route : ActivatedRoute,
    private _cartService : ShoppingCartService,
    private nzNotificationService : NzNotificationService,
    ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => console.log(paramMap.get('Name')));
    this.route.paramMap.subscribe(paramMap => console.log(paramMap.get('SubcategoryId')));
    this.onSubmit()
  }

  readonly formSearch = this.fb.group({ 
    categoryId: [ ]
  })


  onSubmit(){
    const productName = (<HTMLInputElement>document.getElementById('Name')).value;
    this.product = this._productService.getProductFilter(50,
      productName,
       this.formSearch.get('categoryId')?.value);
    }

    addProductToCart(productId: string){
      this._cartService.addProductToCart(productId).subscribe(res=>
        console.log(res));
        this.nzNotificationService.success(
          'Успешно!',
          'Продукт добавлен в корзину!'
        );
    }
}
