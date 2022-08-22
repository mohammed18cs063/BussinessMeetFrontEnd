import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackModel } from 'src/app/model/feedback.model';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-admin-feedback',
  templateUrl: './admin-feedback.component.html',
  styleUrls: ['./admin-feedback.component.css'],
})
export class AdminFeedbackComponent implements OnInit {
  feedbacks: FeedbackModel[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit(): void {
    this.getFeedback();
  }

  getFeedback() {
    this.feedbackService.getAllFeedbacks().subscribe((data) => {
      this.feedbacks = data;
    });
  }
}
