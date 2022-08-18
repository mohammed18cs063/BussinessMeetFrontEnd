import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserModel } from '../model/user-model.model';
import { LoginModel } from '../model/login-model.model';
import { UserloginService } from '../services/userlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: any;
  msg = '';
  role: string = '';
  user: UserModel;
  submitted: boolean = false;

  constructor(
    private loginService: UserloginService,
    private _router: Router,
    private formBuilder: FormBuilder
  ) {
    this.forms();
  }

  ngOnInit(): void {
    //
  }

  forms() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.minLength(8),
          Validators.maxLength(16),
          Validators.required,
        ],
      ],
    });
  }

  userLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      alert('Enter all details');
      return;
    }
    console.log(this.loginForm.value);

    this.loginService.LoginUser(this.loginForm.value).subscribe(
      (response: any) => {
        console.log(response, ' data ');
        localStorage.setItem('usertype', response.user.usertype);
        localStorage.setItem('jwt', response.jwt);
        localStorage.setItem('id', response.user.id);

        let user: LoginModel = {
          name: response.user.name['name'],
          usertype: response.user['usertype'],
          id: response.user['id'],
          email: response.user['email'],
        };

        this.loginService.SetUser(user);

        if (response.user.usertype == 'user') {
          this._router.navigate(['/user']);
        } else {
          this._router.navigate(['/admin']);
        }
      },
      (error: { error: any }) => {
        console.log(error.error);
        this.msg = 'Invalid credentials';
        alert('invalid credentials');
      }
    );
  }
}
