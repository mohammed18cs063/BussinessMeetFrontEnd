import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../model/user-model.model';
import { UserSignupService } from '../services/usersignup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public RegisterForm: any;
  msg = '';
  user: UserModel;
  submitted: boolean = false;
  constructor(
    private registerService: UserSignupService,
    private _router: Router,
    private formBuilder: FormBuilder
  ) {
    this.forms();
  }
  checkingPassword(password: string, passwordConfirmation: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[password],
        passwordConfirmationInput = group.controls[passwordConfirmation];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({ notEquivalent: true });
      } else {
        return passwordConfirmationInput.setErrors(null);
      }
    };
  }
  ngOnInit(): void {
    //
  }
  forms() {
    this.RegisterForm = this.formBuilder.group(
      {
        usertype: ['user'],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.minLength(8),
            Validators.maxLength(16),
            Validators.required,
          ],
        ],
        name: ['', Validators.required],
        phone: ['', [Validators.required]],
        cpassword: ['', Validators.required],
      },
      { validator: this.checkingPassword('password', 'cpassword') }
    );
  }

  userRegister() {
    this.submitted = true;
    if (this.RegisterForm.invalid) {
      alert('Enter all details');
      return;
    }

    console.log(this.RegisterForm.value);
    this.registerService.registerUser(this.RegisterForm.value).subscribe(
      (_data) => {
        alert('Registration successfull');
        this._router.navigate(['/login']);
      },
      (error: { error: any }) => {
        console.log('Registration Failed');
        console.log(error.error);
        alert(error.error);
      }
    );
  }
}
