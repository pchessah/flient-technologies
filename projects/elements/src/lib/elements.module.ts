import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { ContactUsFormComponent } from './forms/contact-us-form.component';
import { TopNavbarComponent } from './navigation/top-navbar/top-navbar.component';

@NgModule({
  declarations: [TopNavbarComponent, ContactUsFormComponent ],
  imports: [ CommonModule, RouterModule, FormsModule, ReactiveFormsModule, MatButtonModule ],
  exports: [ TopNavbarComponent, ContactUsFormComponent ]
})


export class ElementsModule { }
