import { Injectable } from '@angular/core';
import { ThemeModel } from '../model/theme.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  
  constructor(private httpClient: HttpClient) { }
  Addingtheme(addtheme : ThemeModel ) :Observable<Object>
  {
    console.log(addtheme);
    
    return this.httpClient.post<any>(`http://localhost:8080/admin/addTheme`,addtheme);
  }

  getAllThemes(): Observable<ThemeModel[]>
  {
    return this.httpClient.get<ThemeModel[]>(`http://localhost:8080/admin/themes`);
  }

  deleteUser(themeid:number): Observable<Object>{
    return this.httpClient.delete(`http://localhost:8080/admin/deleteTheme/${themeid}`);
  }
  getUserById(themeid:number):Observable<ThemeModel>{
    return this.httpClient.get<ThemeModel>(`http://localhost:8080/admin/theme/${themeid}`);
  }

  updateUser(themeid: number,user:ThemeModel): Observable<Object>{
    return this.httpClient.put(`http://localhost:8080/admin/editTheme/${themeid}`,user);
  }
 
 
/* 
 private themes: ThemeModel[] = [
    {
      themeId: 1,
      themeName: "Fresher's Day",
      themeimageUrl:
        'https://media.istockphoto.com/photos/presentation-show-white-board-design-studio-picture-id1051052502?s=612x612',
      themeCost: 5000,
      photographerDetails: 'Rajesh',
      videographerDetails: 'Suresh',
      gift: 'pen',
      themeDescription: '"Each Sunrise brings a new day filled with new hopes for a New Beginning." ',
    },
    {
      themeId: 2,
      themeName: 'Innovation meeting',
      themeimageUrl:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      themeCost: 4000,
      photographerDetails: 'Rajesh',
      videographerDetails: 'Suresh',
      gift: 'file',
      themeDescription: '"When people talk about innovation in this decade, they become product."',
    },
    {
      themeId: 3,
      themeName: 'Annual Generalann Meet',
      themeimageUrl:
        'https://media.istockphoto.com/photos/glad-to-have-you-on-board-picture-id874803632?s=612x612',
      themeCost: 2000,
      photographerDetails: 'Rajesh',
      videographerDetails: 'Suresh',
      gift: 'Null',
      themeDescription: '"You cannot connect with anyone except through reality."',
    },
  ];

  getThemes(): ThemeModel[] {
    return this.themes;
  }

  getTheme(themeId: number) {
    return this.themes.find((server) => server.themeId === themeId);
  }

  updateTheme(
    themeId: number,
    themeInfo: {
      themeId: number;
      themeName: string;
      themeimageUrl: string;
      themeCost: number;
      photographerDetails: string;
      videographerDetails: string;
      gift: string;
      themeDescription: string;
    }
  ) {
    let index = this.themes.findIndex((server) => server.themeId === themeId);
    let server = this.themes[index];
    server.themeId = themeInfo.themeId;
    server.themeName = themeInfo.themeName;
    server.themeimageUrl = themeInfo.themeimageUrl;
    server.themeCost = themeInfo.themeCost;
    server.photographerDetails = themeInfo.photographerDetails;
    server.videographerDetails = themeInfo.videographerDetails;
    server.gift = themeInfo.gift;
    server.themeDescription = themeInfo.themeDescription;
  }*/
}
