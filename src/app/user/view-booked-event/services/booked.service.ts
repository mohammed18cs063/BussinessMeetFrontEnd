import { Injectable } from '@angular/core';
import { BookedModel } from '../models/booked.model';


@Injectable({
  providedIn: 'root'
})
export class BookedService {
  private events: BookedModel[] = [
    
    {
     event_Id:1,
     eventName:'Meet and Greet',
     eventDate:4/3/2021,
     eventTime:'10am to 12pm',
     totalPrice:3000
    },
    {
     event_Id:2,
     eventName:'Conference',
     eventDate:10/2/2021,
     eventTime:'11am to 1pm',
     totalPrice:2000
    },
    {
        event_Id:3,
        eventName:'Business Meet',
        eventDate:10/3/2021,
        eventTime:'1pm to 3pm',
        totalPrice:2500
    },
    
  ];

  getbooked_events(): BookedModel[] {
    return this.events;
  }

  getbooked_event(event_Id: number) {
    return this.events.find((server) => server.event_Id === event_Id);
  }

  updatebooked_event(
    event_Id: number,
    booked_event_Info: {
        event_Id:number;
        eventName:string;
        eventDate:number;
        eventTime:string;
        totalPrice:number;
    }
  ) {
    let index = this.events.findIndex((server) => server.event_Id === event_Id);
    let server = this.events[index];
    server.event_Id = booked_event_Info.event_Id;
    server.eventName = booked_event_Info.eventName;
    server.eventDate = booked_event_Info.eventDate;
    server.eventTime=booked_event_Info.eventTime;
    server.totalPrice = booked_event_Info.totalPrice;
  }
}
