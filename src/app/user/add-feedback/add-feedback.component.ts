import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserloginService } from 'src/app/services/userlogin.service';
import { FeedbackModel } from '../feedback/feedback.model';
import { FeedbackService } from '../feedback/feedback.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css'],
})
export class AddFeedbackComponent implements OnInit {
  feedback: FeedbackModel = new FeedbackModel();
  addsFeedback: any;

  constructor(
    private feedbackService: FeedbackService,
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: UserloginService
  ) {}
  createFeedback() {
    this.feedbackService.AddingFeedback(this.feedback).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['user/feedback']);
      },
      (error) => console.log(error)
    );
  }
  addFeedback() {
    this.createFeedback();
    alert('Feedback added successfully');
  }
  onSubmit() {
    console.log(this.feedback);
    this.addFeedback();
  }

  ngOnInit(): void {
    //
  }
}
