import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { async, combineLatest } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-my-shopping-cart',
  templateUrl: './my-shopping-cart.component.html',
  styleUrls: ['./my-shopping-cart.component.scss']
})
export class MyShoppingCartComponent implements OnInit {

  itemCart : any;
  constructor(
    private _cartService : ShoppingCartService,
    private _productService: ProductService,
   private nzNotificationService : NzNotificationService){}

  ngOnInit(): void {
    this.onSubmit();
  }
  
  onSubmit(){
    const itemcart$  = this._cartService.GetSelectedCurrentUser(100);
    const product$ = this._productService.getAll();
    combineLatest([product$, itemcart$ ]).subscribe(response=>{
      const product = response[0];
      const itemShoppingCart = response[1];

      this.itemCart = itemShoppingCart['map']((item:any)=>{
        let itemExtented  = item;
        itemExtented.name = product.find(product => product.id === item.adId)?.name
        itemExtented.price = product.find(product => product.id === item.adId)?.price
        itemExtented.description = product.find(product => product.id === item.adId)?.description
        itemExtented.kodBase64 = product.find(product => product.id === item.adId)?.kodBase64
        return itemExtented;  
      })
    }); 

  //  this.itemCart = this._cartService.GetSelectedCurrentUser(100);
  }

  deleteFromCart(itemId: string){
    this._cartService.deleteProduct(itemId);
     
    this.nzNotificationService.success(
      'Успешно!',
      'Продукт удалён из корзины! Обновите страницу'
    );

  }

}
