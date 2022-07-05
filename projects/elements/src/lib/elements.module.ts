import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopNavbarComponent } from './navigation/top-navbar/top-navbar.component';




@NgModule({
  declarations: [ TopNavbarComponent

  ],
  imports: [  CommonModule, RouterModule
  ],
  exports: [ TopNavbarComponent

  ]
})
export class ElementsModule { }
