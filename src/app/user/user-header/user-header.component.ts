import { Component, OnInit } from '@angular/core';
import { UserloginService } from 'src/app/services/userlogin.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css'],
})
export class UserHeaderComponent implements OnInit {
  constructor(private _loginService: UserloginService) {}

  ngOnInit(): void {
    //
  }

  Logout() {
    this._loginService.Logout();
  }
}
