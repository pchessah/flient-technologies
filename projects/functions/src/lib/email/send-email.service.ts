import { Inject, Injectable } from "@angular/core";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable()

export class SendEmailService {
  constructor   (@Inject('ENVIRONMENT') private _env: any) {}

  public sendEmail(templateParams: {to:string, from_name:string, message:string, from_Email:string}) {
    const serviceId =  this._env.emailJsServiceId,
          templateId = this._env.emailJsTemplateId,
          publicKey = this._env.emailJsPublicKey;
    emailjs.init(publicKey);
    debugger;
    emailjs.send(serviceId,templateId, templateParams ,publicKey)
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}