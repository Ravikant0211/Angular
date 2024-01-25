import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  userDetails = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }

  submitted: boolean = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male' 
    // })
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.submitted = true;
    this.userDetails.username = this.signupForm.value.userData.username;
    this.userDetails.email = this.signupForm.value.userData.email;
    this.userDetails.secretQuestion = this.signupForm.value.secret;
    this.userDetails.answer = this.signupForm.value.questionAnswer;
    this.userDetails.gender = this.signupForm.value.gender;
    this.signupForm.reset();
  }
}
