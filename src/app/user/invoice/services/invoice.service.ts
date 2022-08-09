import { Injectable } from '@angular/core';
import { InvoiceModel } from '../model/invoice.model';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
    private invoice: InvoiceModel[] = [
      {
        uthemeId:1,
    uthemeCost:2000,
    menuId:2,
    menuPrice:1000,
    addOnId:1,
    addOnPrice:1000,
    dueAmount:3000,
    amountPaid:1000,
    totalAmount:2000
       },
       
       
     ];
  bill: any;
   
     getbill(): InvoiceModel[] {
       return this.bill;
     }
   
     getBill(utheme_Id: number) {
       return this.bill.find((server) => server.uthemeId === utheme_Id);
     }
   
     updatebooked_event(
       utheme_Id: number,
       booked_event_Info: {
        uthemeId:number;
        uthemeCost:number;
        menuId:number;
        menuPrice:number;
        addOnId:number;
        addOnPrice:number;
        dueAmount:number;
        amountPaid:number;
        totalAmount:number;
       }
     ) {
       let index = this.invoice.findIndex((server) => server.uthemeId === utheme_Id);
       let server = this.invoice[index];
       server.uthemeId = booked_event_Info.uthemeId;
       server.uthemeCost = booked_event_Info.uthemeCost;
       server.menuId = booked_event_Info.menuId;
       server.menuPrice=booked_event_Info.menuPrice;
       server.totalAmount = booked_event_Info.totalAmount;
       server.addOnId=booked_event_Info.addOnId;
       server.addOnPrice=booked_event_Info.addOnPrice;
       server.amountPaid=booked_event_Info.amountPaid;
       server.dueAmount=booked_event_Info.dueAmount;
     }
   }
   