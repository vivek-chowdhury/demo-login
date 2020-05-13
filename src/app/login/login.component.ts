import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * @description This class is responsible for handlling user interaction and buisness logic for
 *  Login compoenent.
 * @param none
 * @return void
 */
export class LoginComponent {

  submitted = false;
  loginForm: FormGroup;
  authError = false;
  authErrorMsg: string;

  /**
   * @description This method is construction of LoginComponent class, it is responsible for
   * initialzing required classes and setting form builder.
   * 
   * @param router
   * @param formBuilder
   */
  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  /**
   * @description This method is getter, and it is responsible for returning form controls.
   * @returns controls
   */
  get f() {
    return this.loginForm.controls;
  }

  /**
   * @description This method is invoked when user clicks on the login button, it is reponsible for 
   * verifying user credential and if user is valid than this method will redirect user to dashboard screen.
   * 
   * @param loginData
   * @returns void
   */
  onSubmit(loginData): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const userloginBody = {
      username: loginData.username,
      password: loginData.password
    };

    if (userloginBody.username === 'admin' && userloginBody.password === 'admin') {
      this.router.navigateByUrl('/dashboard');
    } else {
      this.authError = true;
      this.authErrorMsg = 'Invalid user, please contact administrator !';
    }
  }

}
