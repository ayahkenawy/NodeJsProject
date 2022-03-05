import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  myFile: any
  constructor(private _auth : AuthService) { }

  ngOnInit(): void {
  }
  onChangeFile(event: any) {
    this.myFile = event.target.files[0]
    // console.log(this.myFile)
  }
  uploadImg() {
this._auth.addImage(this.myFile).subscribe(
  res=> console.log(res)
)
  }
}
