import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private router: Router, private service: HttpService, private cookieService: CookieService, private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
   }

  ngOnInit() { }
  getErrorMessageEmail() {
    if (this.signUpForm.get('email')?.value.hasError('required')) {
      return 'You must enter a value';
    }
    return this.signUpForm.get('email')?.value.hasError('email') ? 'Not valid' : '';
  }
  getErrorMessagePassword() {
    if (this.signUpForm.get('password')?.value.hasError('required')) {
      return 'You must enter a value';
    }
    return this.signUpForm.get('password')?.value.hasError('password') ? 'Not valid' : '';
  }
  signIn() {
    let newUser = {
      email: this.signUpForm.get('email')?.value,
      password: this.signUpForm.get('password')?.value
    }
    this.service.signIn(newUser).subscribe(response => {
      if (response === true) {
        this.cookieService.set('email', newUser['email'])
        this.router.navigate(['/analytics'])
      } else {
        alert("Email or Password Incorrect");
      }
    })
  }
}