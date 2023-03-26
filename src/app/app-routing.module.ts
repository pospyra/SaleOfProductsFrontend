import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyShoppingCartComponent } from './components/my-shopping-cart/my-shopping-cart.component';
import { OrderComponent } from './components/order/order.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'myShoppingCart', component: MyShoppingCartComponent},
  {path: 'editProducts/:id', component: EditProductComponent},
  {path: 'order', component: OrderComponent},
  {path: 'admin', component: AdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
