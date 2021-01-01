import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntervalComponent } from './operators/interval/interval.component';
import { OfComponent } from './operators/of/of.component';

import { OperatorsComponent } from './operators/operators.component';
import { TimerComponent } from './operators/timer/timer.component';

const routes: Routes = [
  {path: "" ,redirectTo: "/operators",pathMatch: "full"},
  {path: "operators",component: OperatorsComponent},
  {path: "of",component: OfComponent},
  {path: "interval",component: IntervalComponent},
  {path: "timer",component: TimerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
