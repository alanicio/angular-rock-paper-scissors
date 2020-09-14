import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HandComponent } from './hand/hand.component';
import { OptionsTriangleComponent } from './options-triangle/options-triangle.component';
import { RulesComponent } from './rules/rules.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { VersusComponent } from './versus/versus.component';

@NgModule({
  declarations: [
    AppComponent,
    HandComponent,
    OptionsTriangleComponent,
    RulesComponent,
    GameBoardComponent,
    VersusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
