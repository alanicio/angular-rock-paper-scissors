import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
	public score:number;
	public userSelection:string;
  public houseSeelction:string;
  readonly hands={
    paper:"#5572f2",
    scissors:"#eca00f",
    rock:"#db2e4c",
  }
  
  constructor() {
  	this.score=0;
  }

  ngOnInit(): void {
  }

  getHands=()=>{
    return this.hands;
  }

  userSelectionHandler=(userSelection:string)=>{
  	this.userSelection=userSelection;
  }

}
