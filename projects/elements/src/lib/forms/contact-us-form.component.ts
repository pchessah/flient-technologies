import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: 'contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss']
})

export class ContactUsFormComponent implements OnInit {

  contactUsForm: FormGroup;
  constructor(private  _fb: FormBuilder) {
    this.contactUsForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
   }

  ngOnInit(): void { }

  sendMessage() {
    console.log(this.contactUsForm.value);
    console.log(this.contactUsForm.invalid)
    console.log(this.contactUsForm.valid)
    debugger
  }
}