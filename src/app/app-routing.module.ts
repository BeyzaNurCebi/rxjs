import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfComponent } from './operators/of/of.component';

import { OperatorsComponent } from './operators/operators.component';

const routes: Routes = [
  {path: "" ,redirectTo: "/operators",pathMatch: "full"},
  {path: "operators",component: OperatorsComponent},
  {path: "of",component: OfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
