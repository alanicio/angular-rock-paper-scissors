import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HandComponent } from './hand/hand.component';
import { OptionsTriangleComponent } from './options-triangle/options-triangle.component';
import { RulesComponent } from './rules/rules.component';
import { GameBoardComponent } from './game-board/game-board.component';

@NgModule({
  declarations: [
    AppComponent,
    HandComponent,
    OptionsTriangleComponent,
    RulesComponent,
    GameBoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
