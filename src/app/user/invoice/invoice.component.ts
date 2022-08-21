import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookEvent } from 'src/app/model/book-event.model';
import { BookEventService } from 'src/app/services/book-event.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
bookingId:number;
bookevent: any;
total: number;
menu: number;
people:number;

  constructor(
    private bookeventservice:BookEventService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.bookingId = Number(routeParams.get('eventId'));

    this.bookeventservice.getByEventId(this.bookingId).subscribe((data) => {
      this.bookevent = data;
      console.log(data);
      this.menu=this.bookevent.menu;
      this.people=this.bookevent.noOfPeople;
      this.menuPrice();
      this.totalPrice();
    });
    
  }

menuPrice(){
  this.menu=this.menu*this.people;
}
totalPrice(){
  this.total=this.bookevent.theme+this.menu+this.bookevent.addon;
}

}
