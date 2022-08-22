import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginModel } from '../model/login-model.model';
import { UserModel } from '../model/user-model.model';

@Injectable({
  providedIn: 'root',
})
export class UserloginService {
  baseUrl = 'http://localhost:8080/login';

  constructor(private httpClient: HttpClient, private _router: Router) {}
  private _user: LoginModel;
  get User() {
    if (this._user == null) {
      this.ReadUserFromStorage();
    }
    return this._user;
  }

  public LoginUser(user: UserModel): Observable<object> {
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`, user, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  public SetUser(user) {
    this._user = user;
    this.SetUserLocalStorage();
  }

  private SetUserLocalStorage() {
    localStorage.setItem('user', JSON.stringify(this._user));
  }

  public ReadUserFromStorage() {
    let data = localStorage.getItem('user');
    if (data != null) {
      let jdn = JSON.parse(data);
      this._user = <LoginModel>jdn;
    }
  }

  public Logout() {
    this._user = null;
    localStorage.removeItem('user');
    localStorage.removeItem('jwt');
    this._router.navigate(['/login']);
  }
}
