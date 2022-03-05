import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _auth: AuthService, private _router: Router) {
    this._auth.me().subscribe(user => {
      this._auth.isLogin = true
      this._auth.User = user.data
    }, (err) => {
      this._auth.isLogin = false
      this._auth.User = null
    }, () => {
      // this._router.navigateByUrl("/home")
    })
  }

  ngOnInit(): void {
  }
  logout() {
    this._auth.logout().subscribe((data) => { }, (e) => { }, () => {
      this._auth.isLogin = false
      this._auth.User = {}
      localStorage.removeItem("UserToken")
      this._router.navigateByUrl("/login")
    })

  }
}
