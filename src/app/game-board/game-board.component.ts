import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
	public score:number;
	public userSelection:string;
  constructor() {
  	this.score=0;
  }

  ngOnInit(): void {
  }

  userSelectionHandler=(userSelection:string)=>{
  	this.userSelection=userSelection;
  }

}
