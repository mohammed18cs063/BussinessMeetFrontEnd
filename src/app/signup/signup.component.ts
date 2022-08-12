import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../model/user-model.model';
import { ConfirmValidation } from './confirm-validation';
import { UsersignupService } from '../services/usersignup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:UserModel = new UserModel();
  constructor(private usersignupService:UsersignupService,private router: Router,private formBuilder: FormBuilder) { }

createUser()
{
this.usersignupService.createUser(this.user).subscribe(data=>{alert("Signup success");
this.goToLogin()
},
error=>{
  if(error.status==400)
  {
    alert("Please fill all the details");
  }
  else
  {
    alert("Signup success");
  }
});
}
  onPasswordChange() {
    if (this.confirm_password.value == this.password1.value) {
      this.confirm_password.setErrors(null);
    } else {
      this.confirm_password.setErrors({ mismatch: true });
    }
  }
  // getting the form control elements
  get password1(): AbstractControl {
    return this.signupForm.controls['password'];
  }
  get confirm_password(): AbstractControl {
    return this.signupForm.controls['confirmpassword'];
  } 

  signupForm: FormGroup =new FormGroup({
    role:new FormControl(''),
    name:new FormControl(''),
    emailId:new FormControl(''),
    username:new FormControl(''),
    phoneNumber:new FormControl(''),
    password:new FormControl(''),
    confirmPassword:new FormControl(''),

  })


  submitted = false;

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      role:
    [
      '',
      [Validators.required]
    ],
      emailId: [
        '', 
        [Validators.required, 
         Validators.email
        ]
      ],
      name: [
        '', 
        [Validators.required]
      ],
      username: [
        '', 
        [Validators.required]
      ],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
        ]
      ]
    },
    {
      validators:[ConfirmValidation. match('password', 'confirmPassword')]
    }
     
    )
  }
  get f(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }
  get emailId(){
	  return this.signupForm.get('emailId');
  }
  get name(){
	  return this.signupForm.get('name');
  }
  get username(){
	  return this.signupForm.get('username');
  }
  get phoneNumber(){
	  return this.signupForm.get('phoneNumber');
  }
  get password(){
	  return this.signupForm.get('password');
  }
  get confirmpassword(){
	  return this.signupForm.get('confirmpassword');
  }
  // get role(){
	//   return this.signupForm.get('role');
  // }
  signup(){
    this.createUser();
    this.router.navigate(['user/login']);

  }
  goToLogin()
  { 
    this.router.navigate(['login']);
  }
  gotoUser()
  { 
    this.router.navigate(['user']);
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.signupForm.value, null, 2));
}

}