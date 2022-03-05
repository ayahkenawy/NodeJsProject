import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/user/register/register.component';
import { LoginComponent } from './pages/user/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component'
import { AuthInterceptor } from './providers/interceptors/auth.interceptor';
import { ViewCategoriesComponent } from './pages/category/view-categories/view-categories.component';
import { ProductsComponent } from './pages/product/products/products.component';
import { SingleProductComponent } from './pages/product/single-product/single-product.component';
import { Error404Component } from './pages/error404/error404.component';
import { AddProductComponent } from './pages/product/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ViewCategoriesComponent,
    ProductsComponent,
    SingleProductComponent,
    Error404Component,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
