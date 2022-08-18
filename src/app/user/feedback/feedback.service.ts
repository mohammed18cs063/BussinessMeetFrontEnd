import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedbackModel } from './feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private httpClient: HttpClient) { }
  getAllFeedbacks(): Observable<FeedbackModel[]>
  {
    return this.httpClient.get<FeedbackModel[]>(`http://localhost:8080/user/feedback`);
  }

  AddingFeedback(addFeedback:FeedbackModel): Observable<Object>
  {
    console.log(addFeedback);
    return this.httpClient.post<any>(`http://localhost:8080/user/add-feedback`,addFeedback);
  }
}
