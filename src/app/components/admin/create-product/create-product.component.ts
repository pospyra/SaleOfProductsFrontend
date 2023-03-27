import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  public category$ =  this._categoryService.getListCategory();

  readonly form = this.fb.group({ 
    Name :['', [Validators.required]],
    SubcategoryId: [null, Validators.required ],
    Description:  ['', [ Validators.maxLength(200) ]],
    Price: [
      0,
      [
        Validators.min(1),
        Validators.pattern(/^\d+(,\d{1,2})?$/),
      ],
    ],
    possibleDelivery: [false, Validators.required],
    photo: [[]]
    })

    onFileChange(event: any) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.form.get('photo')?.setValue(file);
    }}

    createProduct(){

      if(this.form.invalid){
        this.nzNotificationService.error('Ошибка' , 'Форма заполнена не верно');
        Object.values(this.form.controls).forEach(control =>{
          if(control.invalid){
            control.markAsDirty();
            control.updateValueAndValidity({onlySelf: true})
          }
        });
        return;
      }

      const formData = new FormData();
      const photos =  this.form.get('photo')?.value;
      formData.append('file', photos!);
      
       this._productService.createProduct(
        this.form.get('Name')?.value,
        this.form.get('SubcategoryId')?.value ,
        this.form.get('Description')?.value,
        this.form.get('Price')?.value,
        this.form.get('PossibleDelivery')?.value,

         formData).subscribe(res=>{
       console.log(res);
       this.nzNotificationService.success(
        'Успешно!',
        'Объявление создано!'
      );
       this.router.navigateByUrl('/admin' );
     });
    }

    ngOnInit(): void {
    }
  
    constructor(
      private fb : FormBuilder, 
      private nzMessageService : NzMessageService, 
      private nzNotificationService : NzNotificationService,
      private _productService: ProductService,
      private router : Router,
      private _categoryService : CategoryService){}
  }


