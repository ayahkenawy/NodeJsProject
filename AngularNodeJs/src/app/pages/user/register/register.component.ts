import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  msg: string = ""
  flag:boolean=false
  constructor(private _auth: AuthService) {

  }

  ngOnInit(): void {
  }
  handleRegister(registerForm: NgForm) {
    // console.log(registerForm.value)
    if (registerForm.valid) {
      this._auth.register(registerForm.value).subscribe(data => {
        console.log(data)
        if (data.apiStatus) {
          this.msg = "Data Added Successfuly"
          this.flag=true
        }
        else { this.msg = "Error Adding Data" }
      }
      )

    }

  }
}
