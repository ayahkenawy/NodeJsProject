import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {
cats:any=[]
  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
    this.getAllCats()
  }
getAllCats(){
  this._auth.getAllCategories().subscribe((res)=>{
    this.cats=res
    console.log(res)
  },
  (e)=>{

  }
  ,()=>{

  })
}
}
