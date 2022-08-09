import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { BookedModel } from '../models/booked.model';
import { BookedService } from '../services/booked.service';

@Component({
  selector: 'app-get-view-booked-event',
  templateUrl: './get-view-booked-event.component.html',
  styleUrls: ['./get-view-booked-event.component.css']
})
export class GetViewBookedEventComponent implements OnInit {
  event:BookedModel;

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private bookedService:BookedService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      let event_Id=+params['id'];
      this.event=this.bookedService.getbooked_event(event_Id);
    });
  }
  updatebooked_event(id: number){
    this.router.navigate(['user/view-booked-event/edit-view-booked-event', id]);
  }
  deleteAddon(id: number){
    this.router.navigate(['user/view-booked-event/deleteAddon', id]);
  }


}
