import { Injectable } from '@angular/core';
import { FoodMenuModel } from '../model/food-menu.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodMenuService {
  constructor(private httpClient: HttpClient) { }
  Addingfood(addfood : FoodMenuModel ) :Observable<Object>
  {
    console.log(addfood);
    
    return this.httpClient.post<any>(`http://localhost:8080/admin/addFoodMenu`,addfood);
  }

  getFoodList(): Observable<FoodMenuModel[]>{
    return this.httpClient.get<FoodMenuModel[]>(`http://localhost:8080/admin/foodMenus`);
  }

  deleteFood(id:number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8080/admin/deleteFoodMenu/${id}`);
  }
  updateFood(id: number,user:FoodMenuModel): Observable<Object>{
    return this.httpClient.put(`http://localhost:8080/admin/editFoodMenu/${id}`,user);
  }
  getFoodById(id:number):Observable<FoodMenuModel>{
    return this.httpClient.get<FoodMenuModel>(`http://localhost:8080/admin/foodMenu/${id}`);
  }
}