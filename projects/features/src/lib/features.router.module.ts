import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";

const FEATURE_ROUTES = [
  { path: "", redirectTo: "features/landing", pathMatch: "full" },
  {
    path: "features",
    children: [
      { path: "landing", component: LandingPageComponent },
    ]
  }

]

@NgModule({
  imports: [RouterModule.forChild(FEATURE_ROUTES)],
  exports: [RouterModule],
})
export class FeatureRoutingModule { }