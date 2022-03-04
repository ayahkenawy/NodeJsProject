import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  id: any
  product:Product={    
    "_id":"",
    "title":"",
    "desc":"",
    "img":"",
    "quantity": 0,
    "department": "",
    "categoryId": "",
    "size":"",
    "color":"",
    "price":0}
  isLoaded:boolean=false
  constructor(private _route: ActivatedRoute, private _auth:AuthService) { }

  ngOnInit(): void {
    this.id=this._route.snapshot.params?.['id']
    this.getProductById(this.id)
  }
  getProductById(id:number){
    this._auth.getSingleProduct(id).subscribe(data=>{
       console.log(data.data)
      this.product=data.data
    },(e)=>{},()=>{  this.isLoaded=true})
  }
}
