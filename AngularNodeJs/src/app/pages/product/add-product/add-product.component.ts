import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  myFile: any
  cats: Category[] = []
  msg: string = ""
  flag: boolean = false
  myForm = new FormData()
  constructor(private _auth: AuthService, private _router: Router) { this.getAllCats() }

  ngOnInit(): void {

  }
  onChangeFile(event: any) {
    this.myFile = event.target.files[0]
    // console.log(this.myFile)
  }
  // uploadImg() {
  //   this.myForm.append('image', this.myFile, this.myFile.name)
  //   this._auth.addImage(this.myForm).subscribe(
  //     res => console.log(res)
  //   )
  // }
  getAllCats() {
    this._auth.getAllCategories().subscribe((res) => {
      this.cats = res.data
      // console.log(res)
    },
      (e) => {

      }
      , () => {
      })
  }
  addProduct(addProductForm: NgForm) {
    console.log(addProductForm.value)
    if (addProductForm.valid) {
      this._auth.addImage(addProductForm.value).subscribe(data => {
         console.log(data)
        // if (data.apiStatus) {
        //   this.msg = "Data Added Successfuly"
        //   this.flag=true
        // }
        // else { this.msg = "Error Adding Data" }
      }
        ,
        (err) => {
          this.msg = "Error Adding Product"
          // this.flag = false
        },
        () => {
          addProductForm.resetForm()
          this.msg = "Data Added Successfully"
          // this.flag = true
          // this._router.navigateByUrl('/login')
        }
      )

    }

  }
}
