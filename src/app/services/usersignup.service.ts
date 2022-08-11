import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../model/user-model.model';

@Injectable({
  providedIn: 'root'
})
export class UsersignupService {
  
  baseUrl='http://localhost:8080/signup';
  constructor(private httpClient:HttpClient) { }
  createUser(user:UserModel):Observable<object>{
    return this.httpClient.post<UserModel[]>(`${this.baseUrl}`,user);
  }
}
