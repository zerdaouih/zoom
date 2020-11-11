import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ZoomLibModule} from 'zoom-lib';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ZoomLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
