import { Injectable } from '@angular/core';
import { AddonModel } from '../model/add-on.model';
import { ThemeModel } from '../model/theme.model';

@Injectable({
  providedIn: 'root'
})
export class AddonService {
  private addons: AddonModel[] = [
    {
     addOnId:1,
     addOnName:'talent show',
     addOnImageUrl:'https://media.istockphoto.com/vectors/talent_neon_1-vector-id1168788101?s=612x612',
     addOnPrice:2500
    },
    {
        addOnId:2,
        addOnName:'Standup comedy',
        addOnImageUrl:'https://media.istockphoto.com/vectors/standup-stage-with-mic-red-curtains-and-comedy-show-logo-vector-id1251603742?s=612x612',
        addOnPrice:2500
    },
    {
        addOnId:3,
        addOnName:'Barter puzzle',
        addOnImageUrl:'https://media.istockphoto.com/photos/knowledge-transfer-and-communication-picture-id1031868654?s=612x612',
        addOnPrice:3500
    },
    
  ];

  getAddOns(): AddonModel[] {
    return this.addons;
  }

  getAddOn(addOnId: number) {
    return this.addons.find((server) => server.addOnId === addOnId);
  }

  updateAddOn(
    addOnId: number,
    addOnInfo: {
        addOnId:number;
        addOnName:string;
        addOnPrice:number;
        addOnImageUrl:string;
    }
  ) {
    let index = this.addons.findIndex((server) => server.addOnId === addOnId);
    let server = this.addons[index];
    server.addOnId = addOnInfo.addOnId;
    server.addOnName = addOnInfo.addOnName;
    server.addOnImageUrl = addOnInfo.addOnImageUrl;
    server.addOnPrice = addOnInfo.addOnPrice;
  }
}
