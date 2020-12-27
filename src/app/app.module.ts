import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OperatorsComponent } from './operators/operators.component';
import { OfComponent } from './operators/of/of.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatorsComponent,
    OfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
