import { Injectable } from '@angular/core';
import { UserThemeModel } from '../model/user-theme-model';

@Injectable({
  providedIn: 'root'
})
export class UserThemeService {
  private userthemes: UserThemeModel[] = [
    {
      uthemeId: 1,
      uthemeName: "Fresher's Day",
      uthemeimageUrl:
        'https://media.istockphoto.com/photos/presentation-show-white-board-design-studio-picture-id1051052502?s=612x612',
      uthemeCost: 5000,
      uphotographerDetails: 'Rajesh',
      uvideographerDetails: 'Suresh',
      ugift: 'pen',
      uthemeDescription: '"Each Sunrise brings a new day filled with new hopes for a New Beginning." ',
    },
    {
      uthemeId: 2,
      uthemeName: 'Innovation meeting',
      uthemeimageUrl:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      uthemeCost: 4000,
      uphotographerDetails: 'Rajesh',
      uvideographerDetails: 'Suresh',
      ugift: 'file',
      uthemeDescription: '"When people talk about innovation in this decade, they become product."',
    },
    {
      uthemeId: 3,
      uthemeName: 'Annual Generalann Meet',
      uthemeimageUrl:
        'https://media.istockphoto.com/photos/glad-to-have-you-on-board-picture-id874803632?s=612x612',
      uthemeCost: 2000,
      uphotographerDetails: 'Rajesh',
      uvideographerDetails: 'Suresh',
      ugift: 'Null',
      uthemeDescription: '"You cannot connect with anyone except through reality."',
    },
  ];

  getThemes(): UserThemeModel[] {
    return this.userthemes;
  }

  getTheme(themeId: number) {
    return this.userthemes.find((server) => server.uthemeId === themeId);
  }

  // updateTheme(
  //   themeId: number,
  //   themeInfo: {
  //     themeId: number;
  //     themeName: string;
  //     themeimageUrl: string;
  //     themeCost: number;
  //     photographerDetails: string;
  //     videographerDetails: string;
  //     gift: string;
  //     themeDescription: string;
  //   }
  //  {
  //   let index = this.userthemes.findIndex((server) => server.themeId === themeId);
  //   let server = this.userthemes[index];
  //   server.themeId = themeInfo.themeId;
  //   server.themeName = themeInfo.themeName;
  //   server.themeimageUrl = themeInfo.themeimageUrl;
  //   server.themeCost = themeInfo.themeCost;
  //   server.photographerDetails = themeInfo.photographerDetails;
  //   server.videographerDetails = themeInfo.videographerDetails;
  //   server.gift = themeInfo.gift;
  //   server.themeDescription = themeInfo.themeDescription;
  // }
}
