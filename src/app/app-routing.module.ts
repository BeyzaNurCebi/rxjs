import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeferComponent } from './operators/creation-operators/defer/defer.component';
import { FromComponent } from './operators/creation-operators/from/from.component';
import { IntervalComponent } from './operators/creation-operators/interval/interval.component';
import { OfComponent } from './operators/creation-operators/of/of.component';

import { OperatorsComponent } from './operators/operators.component';
import { RangeComponent } from './operators/creation-operators/range/range.component';
import { TimerComponent } from './operators/creation-operators/timer/timer.component';
import { AjaxComponent } from './operators/creation-operators/ajax/ajax.component';
import { CreateComponent } from './operators/creation-operators/create/create.component';
import { FromEventComponent } from './operators/creation-operators/fromEvent/fromEvent.component';
import { PipeFirstComponent } from './operators/filtering-operators/pipe-first/pipe-first.component';

const routes: Routes = [
  {path: "" ,redirectTo: "/operators",pathMatch: "full"},
  {path: "operators",component: OperatorsComponent},
  {path: "of",component: OfComponent},
  {path: "interval",component: IntervalComponent},
  {path: "timer",component: TimerComponent},
  {path: "range",component: RangeComponent},
  {path: "from",component: FromComponent},
  {path: "defer",component: DeferComponent},
  {path: "ajax",component: AjaxComponent},
  {path: "create",component: CreateComponent},
  {path: "fromEvent",component: FromEventComponent},
  {path: "pipe-first",component: PipeFirstComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
