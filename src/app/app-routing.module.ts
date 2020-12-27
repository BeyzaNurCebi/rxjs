import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperatorsComponent } from './operators/operators.component';

const routes: Routes = [
  {path: "" ,redirectTo: "/operators",pathMatch: "full"},
  {path: "operators",component: OperatorsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
