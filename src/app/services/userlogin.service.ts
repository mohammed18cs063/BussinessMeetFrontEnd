import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../model/login-model.model';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {
  baseUrl='http://localhost:8080/login';
  constructor(private httpClient:HttpClient) { }
  retriveUser(user:LoginModel):Observable<object>{
    return this.httpClient.post
    (this.baseUrl,user,{headers:new HttpHeaders({'Content-Type':'application/json'})});
  }
}