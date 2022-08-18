import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackModel } from './feedback.model';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbacks:FeedbackModel[];

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private feedbackService:FeedbackService) { }

  ngOnInit(): void {
    this.getFeedback();
  }

  getFeedback(){
    this.feedbackService.getAllFeedbacks().subscribe(data =>
      {
        this.feedbacks=data;
      })
  }

  goToAddFeedback(){
    this.router.navigate(['user/add-feedback'])
  }

}
