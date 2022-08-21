import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookEvent } from 'src/app/model/book-event.model';
import { BookEventService } from 'src/app/services/book-event.service';
import { UserloginService } from 'src/app/services/userlogin.service';

@Component({
  selector: 'app-booked-events',
  templateUrl: './booked-events.component.html',
  styleUrls: ['./booked-events.component.css']
})
export class BookedEventsComponent implements OnInit {
  events: Array<BookEvent> = new Array();
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private bookedService: BookEventService,
    private loginService: UserloginService
  ) {}

  ngOnInit(): void {
    this.getBookedEvents();
  }

  getBookedEvents() {
    this.bookedService
      .getAll()
      .subscribe((data) => {
        console.log(data);
        this.events = data;
      });
  }
  deleteEvent(id: number) {
    this.bookedService.deleteEvent(id).subscribe((data) => {
      console.log(data);
      alert('Booked Event deleted successfully');
      this.getBookedEvents();
    });
  }

}
