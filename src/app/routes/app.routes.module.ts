import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

const MAIN_ROUTES = [
  {path: "", redirectTo: "main", pathMatch: "full"},
  {
    path: "main", 
    loadChildren: () => import('../../../projects/features/src/lib/features.module').then(m => m.FeaturesModule)
  },
]

@NgModule({
  imports: [RouterModule.forRoot(MAIN_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}