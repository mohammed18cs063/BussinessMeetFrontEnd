import { Time } from "@angular/common";

export interface BookEvent {
    eventId: number;
    eventName:string;
    name:string;
    userAddress:string;
    eventDate: Date ;
    phoneNumber:string;
    eventTime: Time;
    noOfPeople:number;
    menu : string ;
    addon : string ;
    userId : number ;
}
