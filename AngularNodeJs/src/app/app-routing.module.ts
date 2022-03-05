import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCategoriesComponent } from './pages/category/view-categories/view-categories.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { AddProductComponent } from './pages/product/add-product/add-product.component';
import { ProductsComponent } from './pages/product/products/products.component';
import { SingleProductComponent } from './pages/product/single-product/single-product.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';

const routes: Routes = [
  {path:"",redirectTo:"\login",pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
   {path:"home", component:HomeComponent},
  {path:"categories", component:ViewCategoriesComponent},
  {path:"product",children:[
  {path:"all/:catId", component:ProductsComponent},
  {path:":id", component:SingleProductComponent},
  {path:"", component:AddProductComponent}
  ]},
 
  {path:"**", component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
