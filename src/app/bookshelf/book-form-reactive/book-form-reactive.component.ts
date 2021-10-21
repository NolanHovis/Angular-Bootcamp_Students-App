import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form-reactive',
  templateUrl: './book-form-reactive.component.html',
  styleUrls: ['./book-form-reactive.component.css'],
})
export class BookFormReactiveComponent implements OnInit {
  reactiveForm: FormGroup;
  formHasBeenSubmitted = false;

  constructor() {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      genre: new FormControl('mystery', Validators.required),
      isBestSeller: new FormControl(null),
    });
  }

  onFormSubmit() {
    console.log('Form Submitted!');

    // Change boolean formSubmitted to true
    this.formHasBeenSubmitted = true;

    // Reset the form after 5 seconds
    setTimeout(() => {
      this.reactiveForm.reset();
      this.formHasBeenSubmitted = false;
    }, 5000);
  }
}
