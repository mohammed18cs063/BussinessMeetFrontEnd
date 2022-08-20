import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookEvent } from '../model/book-event.model';
import { UserloginService } from './userlogin.service';

@Injectable({
  providedIn: 'root'
})
export class BookEventService {

  constructor(private httpClient: HttpClient , private loginService: UserloginService) { }
  BookingEvent(bookevent: BookEvent) :Observable<Object>
  {
    console.log(bookevent);
    return this.httpClient.post(`http://localhost:8080/user/bookEvent`,bookevent);
  
  }
  public getAllByUserId(id:number):Observable<BookEvent[]>
  {
    return this.httpClient.get<BookEvent[]>(`http://localhost:8080/user/view-booked-events/${id}`);
  }

  public getByEventId(id:number)
  {
    return this.httpClient.get(`http://localhost:8080/user/view-booked-event/${id}`);
  }
  
  public deleteEvent(id:number) {
    return this.httpClient.delete(`http://localhost:8080/user/view-booked-event/delete-view-booked-event/${id}`);
  }
  public updateEvent(event,id:number) {
    return this.httpClient.put(`http://localhost:8080/view-booked-event/edit-view-booked-event/${id}`,event);
  }
}
