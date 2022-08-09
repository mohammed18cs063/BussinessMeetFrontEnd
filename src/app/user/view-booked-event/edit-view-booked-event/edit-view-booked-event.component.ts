import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BookedService } from '../services/booked.service';

@Component({
  selector: 'app-edit-view-booked-event',
  templateUrl: './edit-view-booked-event.component.html',
  styleUrls: ['./edit-view-booked-event.component.css']
})
export class EditViewBookedEventComponent implements OnInit {

  allowEdit:boolean;
  event_Id:number;
  eventName:string;
  eventDate:number;
  eventTime:string;
  totalPrice:number;

  constructor(private activatedRoute:ActivatedRoute,private bookedService:BookedService,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      let event_Id=+params['id'];
      let server=this.bookedService.getbooked_event(event_Id);
      this.event_Id=server.event_Id;
      this.eventName=server.eventName;
      this.eventDate=server.eventDate;
      this.eventTime=server.eventTime;
      this.totalPrice=server.totalPrice;
    })
  }
  onUpdateEvent(){
    let booked_event_Info:{
      event_Id:number;
      eventName:string;
      eventDate:number;
      eventTime:string;
      totalPrice:number;
      }={
      event_Id:this.event_Id,
      eventName:this.eventName,
      eventDate:this.eventDate,
      eventTime:this.eventTime,
      totalPrice:this.totalPrice
    };
    this.activatedRoute.params.subscribe((params:Params)=>{
      let event_Id=+params['id'];      
      this.bookedService.updatebooked_event(event_Id,booked_event_Info);
      this.router.navigate(['user/view-booked-event']);
    });
  }

}
