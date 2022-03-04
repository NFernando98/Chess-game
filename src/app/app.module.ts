import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IframeComponent } from 'src/iframe/iframe.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxChessBoardModule } from "ngx-chess-board";


@NgModule({
  declarations: [
    AppComponent,
    IframeComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChessBoardModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
