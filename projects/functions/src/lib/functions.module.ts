import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SendEmailService } from './email/send-email.service';


@NgModule({
  declarations: [ ],
  imports: [ ],
  exports: [ ],
  providers: [ SendEmailService, {provide: 'ENVIRONMENT', useValue: environment} ]
})
export class FunctionsModule { }
