import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {


  readonly form = this.fb.group({ 
    deliveryAddress : ['', [Validators.required]]
    });

  constructor(
    private _orderService : OrderService,
    private fb : FormBuilder, ){}

  ngOnInit(): void {
  }

  registerOrder(){
    this._orderService.RegistrOrder(this.form.getRawValue())
    .subscribe(res=>{
      console.log(
        'Успешно!',
        'Заказ оформлен!'
      );
    })
  }
}

