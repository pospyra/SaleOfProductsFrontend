import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  readonly form = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required , Validators.minLength(3) ]],
  })
  
    constructor(
       private fb : FormBuilder, 
       private nzMessageService : NzMessageService, 
       private nzNotificationService : NzNotificationService, 
       private _auth: UserService ) { }
  
    ngOnInit(): void {
    }
  
    onSubmit(){
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
  
      this._auth.login(this.form.getRawValue()).subscribe(res=>{
        console.log(res);
      })
    }
  }

