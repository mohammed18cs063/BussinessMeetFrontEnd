import { Injectable } from '@angular/core';
import { ThemeModel } from '../model/theme.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(private httpClient: HttpClient) {}
  Addingtheme(addtheme: ThemeModel): Observable<Object> {
    console.log(addtheme);

    return this.httpClient.post<any>(
      `http://localhost:8080/admin/addTheme`,
      addtheme
    );
  }

  getAllThemes(): Observable<ThemeModel[]> {
    return this.httpClient.get<ThemeModel[]>(
      `http://localhost:8080/admin/themes`
    );
  }

  deleteTheme(id: number): Observable<Object> {
    return this.httpClient.delete(
      `http://localhost:8080/admin/deleteTheme/${id}`
    );
  }
  getTheme(id: number): Observable<ThemeModel> {
    return this.httpClient.get<ThemeModel>(
      `http://localhost:8080/admin/theme/${id}`
    );
  }

  updateTheme(id: number, user: ThemeModel): Observable<Object> {
    return this.httpClient.put(
      `http://localhost:8080/admin/editTheme/${id}`,
      user
    );
  }
}
