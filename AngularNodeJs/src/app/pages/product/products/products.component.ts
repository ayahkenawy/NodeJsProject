import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/providers/services/auth.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  id: any
  products:Product[]=[]
  isLoaded:boolean=false
  constructor(private _route: ActivatedRoute, private _auth:AuthService) { }

  ngOnInit(): void {
     this.id=this._route.snapshot.params?.['catId']
    // this.id = this._route.snapshot.paramMap.get('catId')
    // this._route.paramMap.subscribe(params=>{
    //   this.id=params.get('catId')
    // })
    this.getProducts(this.id)
  }
getProducts(id:number){
  this._auth.getProductByCategoryId(id).subscribe(data=>{
    // console.log(data.data)
    this.products=data.data
  },(e)=>{},()=>{  this.isLoaded=true})
}
}
