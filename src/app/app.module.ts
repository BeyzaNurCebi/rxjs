import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OperatorsComponent } from './operators/operators.component';
import { OfComponent } from './operators/creation-operators/of/of.component';
import { IntervalComponent } from './operators/creation-operators/interval/interval.component';
import { TimerComponent } from './operators/creation-operators/timer/timer.component';
import { RangeComponent } from './operators/creation-operators/range/range.component';
import { FromComponent } from './operators/creation-operators/from/from.component';
import { DeferComponent } from './operators/creation-operators/defer/defer.component';
import { AjaxComponent } from './operators/creation-operators/ajax/ajax.component';
import { CreateComponent } from './operators/creation-operators/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatorsComponent,
    OfComponent,
    IntervalComponent,
    TimerComponent,
    RangeComponent,
    FromComponent,
    DeferComponent,
    AjaxComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
