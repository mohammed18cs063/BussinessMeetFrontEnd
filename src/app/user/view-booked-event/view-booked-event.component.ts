import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookedModel } from './models/booked.model';
import { BookedService } from './services/booked.service';

@Component({
  selector: 'app-view-booked-event',
  templateUrl: './view-booked-event.component.html',
  styleUrls: ['./view-booked-event.component.css']
})
export class ViewBookedEventComponent implements OnInit {
  
  view_event:BookedModel[];

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private bookedService:BookedService) { }

  ngOnInit(): void {
    this.view_event=this.bookedService.getbooked_events();
  }
  updatebooked_event(id: number){
    this.router.navigate(['user/view-booked-event/edit-view-booked-event', id]);
  }
  deleteviewbookedevent(id: number){
    this.router.navigate(['user/view-booked-event/delete-view-booked-event', id]);
  }
  goToBill() {
    this.router.navigate(['user/bill']);
  }

}
