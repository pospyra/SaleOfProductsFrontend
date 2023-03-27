import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MyShoppingCartComponent } from './components/my-shopping-cart/my-shopping-cart.component';
import { RouterModule } from '@angular/router';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import {NzCardModule} from "ng-zorro-antd/card";
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { AdminComponent } from './components/admin/admin.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { OrderComponent } from './components/order/order.component';
import { CreateProductComponent } from './components/admin/create-product/create-product.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';
import { CreateCategoryComponent } from './components/admin/create-category/create-category.component';
import { EditCategoryComponent } from './components/admin/edit-category/edit-category.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { uk_UA } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import uk from '@angular/common/locales/uk';

registerLocaleData(uk);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    MyShoppingCartComponent,
    AdminComponent,
    OrderComponent,
    CreateProductComponent,
    EditProductComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
  ],
  imports: [
    ReactiveFormsModule ,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NzUploadModule,
    NzMessageModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzLayoutModule,
    NzCardModule,
    NzSpinModule,
    NzCardModule,
    NzPaginationModule,
    NzNotificationModule,
    NzTreeSelectModule,
    BrowserAnimationsModule,
    NzAlertModule,
  ],
  providers: [ 
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'RUB' },  
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }, { provide: NZ_I18N, useValue: uk_UA }, 
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
