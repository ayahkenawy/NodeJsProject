import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCategoriesComponent } from './pages/category/view-categories/view-categories.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/product/products/products.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';

const routes: Routes = [
  {path:"",redirectTo:"\login",pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
   {path:"home", component:HomeComponent},
  {path:"categories", component:ViewCategoriesComponent},
  {path:"product/all/:catId", component:ProductsComponent},
  {path:"**", component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
