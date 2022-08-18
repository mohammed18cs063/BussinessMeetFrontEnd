import { Component, OnInit } from '@angular/core';
import { UserloginService } from 'src/app/services/userlogin.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css'],
})
export class AdminHeaderComponent implements OnInit {
  constructor(private _loginService: UserloginService) {}

  ngOnInit(): void {
    //
  }

  logout() {
    this._loginService.Logout();
  }
}
