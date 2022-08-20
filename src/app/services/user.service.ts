import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/model/user-model.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<UserModel[]>{
    return this.httpClient.get<UserModel[]>(`http://localhost:8080/admin/users`);
  }

  deleteUser(id:number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8080/admin/deleteUser/${id}`);
  }

  getUser(id:number):Observable<UserModel>{
    return this.httpClient.get<UserModel>(`http://localhost:8080/user/${id}`);
  }

}
