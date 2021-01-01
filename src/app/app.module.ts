import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OperatorsComponent } from './operators/operators.component';
import { OfComponent } from './operators/of/of.component';
import { IntervalComponent } from './operators/interval/interval.component';
import { TimerComponent } from './operators/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatorsComponent,
    OfComponent,
    IntervalComponent,
    TimerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
