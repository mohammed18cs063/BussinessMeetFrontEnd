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
    
    return this.httpClient.post<any>('http://localhost:8080/admin/addon/addAddon',addaddon);
  }
  getAddon(addOnid:number): Observable<AddonModel>{
    return this.httpClient.get<AddonModel>('http://localhost:8080/admin/addon/getAddon/{id}');
  }
  getAddons(): Observable<AddonModel[]>{
    return this.httpClient.get<AddonModel[]>('http://localhost:8080/admin/addon/getAddons');
  }
  deleteAddon(addOnid: number): Observable<Object>{
    return this.httpClient.delete('http://localhost:8080/admin/addon/deleteAddon/{id}/${addOnid}');
  }
  updateAddon(addOnid: number,user:AddonModel): Observable<Object>{
    return this.httpClient.put('http://localhost:8080/admin/addon/editAddon/{id}/${addOnid}',user);
  }

  GetTheme(id)
  {
    return this.httpClient.get('http://localhost:8080/user/getTheme/'+id)
  }
}
  // private addons: AddonModel[] = [
  //   {
  //    addOnId:1,
  //    addOnName:'talent show',
  //    addOnImageUrl:'https://media.istockphoto.com/vectors/talent_neon_1-vector-id1168788101?s=612x612',
  //    addOnPrice:2500
  //   },
  //   {
  //       addOnId:2,
  //       addOnName:'Standup comedy',
  //       addOnImageUrl:'https://media.istockphoto.com/vectors/standup-stage-with-mic-red-curtains-and-comedy-show-logo-vector-id1251603742?s=612x612',
  //       addOnPrice:2500
  //   },
  //   {
  //       addOnId:3,
  //       addOnName:'Barter puzzle',
  //       addOnImageUrl:'https://media.istockphoto.com/photos/knowledge-transfer-and-communication-picture-id1031868654?s=612x612',
  //       addOnPrice:3500
  //   },
    
  // ];

  // getAddOns(): AddonModel[] {
  //   return this.addons;
  // }

  // getAddOn(addOnId: number) {
  //   return this.addons.find((server) => server.addOnId === addOnId);
  // }

  // updateAddOn(
  //   addOnId: number,
  //   addOnInfo: {
  //       addOnId:number;
  //       addOnName:string;
  //       addOnPrice:number;
  //       addOnImageUrl:string;
  //   }
  // ) {
  //   let index = this.addons.findIndex((server) => server.addOnId === addOnId);
  //   let server = this.addons[index];
  //   server.addOnId = addOnInfo.addOnId;
  //   server.addOnName = addOnInfo.addOnName;
  //   server.addOnImageUrl = addOnInfo.addOnImageUrl;
  //   server.addOnPrice = addOnInfo.addOnPrice;
  // }
//}
