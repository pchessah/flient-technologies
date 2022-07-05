import { NgModule } from '@angular/core';
import { FeatureRoutingModule } from './features.router.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';



@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [ FeatureRoutingModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class FeaturesModule { }
