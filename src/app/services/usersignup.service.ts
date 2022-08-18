import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../model/user-model.model';

@Injectable({
  providedIn: 'root'
})
export class UserSignupService {
   baseUrl="http://localhost:8080/signup";
  constructor(private httpClient: HttpClient)
  {  
  
  }

 public registerUser(user: UserModel) :Observable<object>
  {
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`,user);
  }
}
