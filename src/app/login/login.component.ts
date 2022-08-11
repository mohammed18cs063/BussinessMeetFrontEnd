import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../model/login-model.model';
import { UserloginService } from '../services/userlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: LoginModel = new LoginModel();
  constructor(
    private userloginService: UserloginService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  retriveUser() {
    if (
      this.user.emailId == 'admin@gmail.com' &&
      this.user.password == 'admin@123'
    ) {
      sessionStorage.setItem('emailId', 'admin@gmail.com');
      this.gotoAdmin();
    } else {
      this.userloginService.retriveUser(this.user).subscribe(
        (response: any) => {
          if (response) {
            console.log(response);
            sessionStorage.setItem('jwt', response.jwt);
            sessionStorage.setItem('emailId', this.user.emailId);
            this.gotoUser();
          } else {
            alert('Email id or Password is wrong');
          }
        },
        (error) => console.log(error)
      );
    }
  }
  login() {
    this.retriveUser();
  }
  loginForm: FormGroup = new FormGroup({
    emailId: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
  });

  
  ngOnInit(): void {
    //
  }
  // get f(): { [key: string]: AbstractControl } {
  //   return this.loginForm.controls;
  // }
  //   onSubmit(): void {
  //     this.submitted = true;
  //     if (this.loginForm.invalid) {
  //       return;
  //     }
  //     console.log(JSON.stringify(this.loginForm.value, null, 2));
  // }
  get emailId() {
    return this.loginForm.get('emailId');
  }
  get password() {
    return this.loginForm.get('password');
  }
  gotoUser() {
    this.router.navigate(['/user']);
  }
  gotoAdmin() {
    this.router.navigate(['/admin']);
  }
}
