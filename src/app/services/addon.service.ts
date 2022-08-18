import { Injectable } from '@angular/core';
import { AddonModel } from '../model/add-on.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddonService {
  constructor(private httpClient: HttpClient) { }
  AddingAddOn(addaddon : AddonModel ) :Observable<Object>
  {
    console.log(addaddon);
    
    return this.httpClient.post<any>(`http://localhost:8080/admin/addAddon`,addaddon);
  }

  getAddons(): Observable<AddonModel[]>{
    return this.httpClient.get<AddonModel[]>(`http://localhost:8080/admin/addons`);
  }

  deleteAddon(id:number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8080/admin/deleteAddon/${id}`);
  }
  updateAddon(id: number,user:AddonModel): Observable<Object>{
    return this.httpClient.put(`http://localhost:8080/admin/editAddon/${id}`,user);
  }
  getAddonById(id:number):Observable<AddonModel>{
    return this.httpClient.get<AddonModel>(`http://localhost:8080/admin/addon/${id}`);
  }
  GetTheme(id)
  {
    return this.httpClient.get('http://localhost:8080/user/getTheme/'+id)
  }
}