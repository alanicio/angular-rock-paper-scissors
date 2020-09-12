import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HandComponent } from './hand/hand.component';
import { OptionsTriangleComponent } from './options-triangle/options-triangle.component';

@NgModule({
  declarations: [
    AppComponent,
    HandComponent,
    OptionsTriangleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
