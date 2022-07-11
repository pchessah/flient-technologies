import { NgModule } from '@angular/core';
import { ElementsModule } from 'projects/elements/src';
import { FeatureRoutingModule } from './features.router.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [ FeatureRoutingModule, ElementsModule],
  exports: [ LandingPageComponent ]
})
export class FeaturesModule { }
