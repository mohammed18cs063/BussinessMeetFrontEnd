import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-view-booked-event',
  templateUrl: './delete-view-booked-event.component.html',
  styleUrls: ['./delete-view-booked-event.component.css']
})
export class DeleteViewBookedEventComponent implements OnInit {

  constructor(private activatedRouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }
  deleteviewbookedevent(){
    this.goToBookedevent();
    alert("Your event deleted Sucessfully");
  }

  goToBookedevent(){
    this.router.navigate(['user/view-booked-event']);
  }

}
