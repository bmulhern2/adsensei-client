import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from '../http.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private router: Router, private service: HttpService, private fb: FormBuilder) {
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
  signUp() {
    let newUser = {
      email: this.signUpForm.get('email')?.value,
      password: this.signUpForm.get('password')?.value
    }
    this.service.signUp(newUser).subscribe(response => {
      if (response === 'User Created') {
        this.router.navigate(['/signIn'])
      } else {
        alert("Sign Up Not Sucessful")
      }
    })
  }
}
