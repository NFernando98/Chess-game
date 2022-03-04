import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IframeComponent } from 'src/iframe/iframe.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    IframeComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
