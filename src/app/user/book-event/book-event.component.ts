import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-event',
  templateUrl: './book-event.component.html',
  styleUrls: ['./book-event.component.css']
})
export class BookEventComponent implements OnInit {
  currentdate:any =new Date();

  
  eventform:FormGroup=new FormGroup({
    eventName:new FormControl(''),
    eventAddress:new FormControl(''),
    applicantName:new FormControl(''),
    eventDate:new FormControl(''),
    applicantAddress:new FormControl(''),
    eventTime: new FormControl(''),
    applicantMobileNo:new FormControl(''),
    noOfPeople:new FormControl(''),
    applicantEmail:new FormControl(''),
    selectFoodCategory:new FormControl(''),
    selectAddOnsCategory:new FormControl(''),
    quantityOfVeg:new FormControl(''),
    quantityOfNonVeg:new FormControl('')
  })
  submitted = false;


  constructor(private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.eventform=this.formBuilder.group({
      eventName:[
        '',
        [Validators.required]
      ],
      eventAddress:[
        '',
        [Validators.required]
      ],
      applicantName:[
        '',
        [Validators.required]
      ],
      eventDate:[
        '',
        [Validators.required]
      ],
      applicantAddress:[
        '',
        [Validators.required]
      ],
      eventTime:[
        '',
        [Validators.required]
      ],
      applicantMobileNo:[
        '',
        [
          Validators.required,
          Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')
        ]
      ],
      noOfPeople:[
        '',
        [Validators.required]
      ],
      applicantEmail:[
        '',
        [Validators.required,
          Validators.email]
      ],
      selectFoodCategory:[
        '',
        [Validators.required]
      ],
      selectAddOnsCategory:[
        '',
        [Validators.required]
      ],
      quantityOfVeg:[
        '',
        [Validators.required]
      ],
      quantityOfNonVeg:[
        '',
        [Validators.required]
      ]


    })
   
  }
  get f(): { [key: string]: AbstractControl } {
    return this.eventform.controls;
  }
  keyPressNumbers(event:any) {
    let charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
  goToViewBookedEvent(){
    this.router.navigate(['user/view-booked-event']);
  }
}

